import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistraiton = () => {
    return  useMutation<any, Error, FieldValues>({
        mutationKey : ["USER_REGISTRATION"],
        mutationFn : async (userData) => await registerUser(userData),
        onSuccess: () => {
          toast.success("User registration successfully")
        },
        onError : (error) => {
            toast.error(error.message)
        }
      });
}