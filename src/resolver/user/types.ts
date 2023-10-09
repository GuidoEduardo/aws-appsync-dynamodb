export type createUserOptions = {
    input: {
        username: string;
        email: string;
        role: "admin" | "project_lead" | "collaborator";
    }
}

export type getUserByIdOptions = {
    user: string;
}