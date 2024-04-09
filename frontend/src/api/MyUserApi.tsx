import { useMutation } from "react-query";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const response = await fetch("http://localhost:7000/api/my/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    return response.json();
  };

  const mutation = useMutation(createMyUserRequest);
  const { mutateAsync: createUser, isLoading, isError, isSuccess } = mutation;

  return { createUser, isLoading, isError, isSuccess };
};
