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

        const socket  = useAuthStore.getState().socket
        socket.on("newMessage",(newMessage)=>{
            if(newMessage.senderId !== selectedUser._id) return
            set({
                messages:[...get().messages,newMessage]
            })
        })
    },

    unsubscribeFromMessages: () =>{
        const socket = useAuthStore.getState().socket
        socket.off("newMessage")

    },

    setSelectedUser: (user) => set({selectedUser:user}),

}));