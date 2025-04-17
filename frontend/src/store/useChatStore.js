import {create} from 'zustand';
import { toast } from 'react-hot-toast';
import {axiosInstance} from "../lib/axios.js";
import { Socket } from 'socket.io-client';
import { useAuthStore } from './useAuthStore.js';


export const useChatStore = create((set,get) => ({
    messages:[],
    users:[],
    selectedUser: null,
    isMessagesLoading: false,
    isUsersLoading: false,
    

    getUsers : async () => {
        set({isUsersLoading:true})
        try {
            const res = await axiosInstance.get('/messages/users');
            set({users:res.data})
            toast.success('Users loaded successfully')

        } catch (error) {
            toast.error(error.response.data.message || 'Error loading users')
        }finally {
            set({isUsersLoading:false})
    }
    },


    getMessages : async (userId) => {
        set({isMessagesLoading:true})
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({messages:res.data})
            
            // Re-subscribe to messages whenever we load messages for a user
            get().unsubscribeFromMessages();
            get().subscribeToMessages();
            
            toast.success('Messages loaded successfully')

        } catch (error) {
            toast.error(error.response.data.message || 'Error loading messages')
        }finally {
            set({isMessagesLoading:false})
    }
    },

    sendMessage: async (messageData) => {
        const {selectedUser,messages}=get()

        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData);
            set({messages:[...messages,res.data]})
            toast.success('Message sent successfully')

        } catch (error) {
            toast.error(error.response.data.message || 'Error sending message')
        }
    },

    subscribeToMessages : () =>{
        const {selectedUser} = get()
        if(!selectedUser) return;

        const socket = useAuthStore.getState().socket
        if (!socket) {
            console.log("Socket not connected");
            return;
        }
        
        console.log("Subscribing to messages");
        
        // Make sure we remove any existing listeners first
        socket.off("newMessage");
        
        socket.on("newMessage",(newMessage)=>{
            const currentSelectedUser = get().selectedUser;
            if(!currentSelectedUser) return;
            
            // Check if the message is from or to the currently selected user
            if(newMessage.senderId === currentSelectedUser._id || 
               newMessage.receiverId === currentSelectedUser._id) {
                console.log("New message received:", newMessage);
                set({
                    messages:[...get().messages, newMessage]
                });
            }
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket
        if (socket) {
            console.log("Unsubscribing from messages");
            socket.off("newMessage");
        }
    },

    setSelectedUser: (user) => {
        set({selectedUser:user});
        
        // When changing users, reset messages and re-setup socket subscription
        if(user) {
            get().getMessages(user._id);
        } else {
            set({messages: []});
            get().unsubscribeFromMessages();
        }
    },
}));