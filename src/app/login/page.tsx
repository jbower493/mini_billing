"use client";

import { useState } from "react";

export default function Login() {
    const [status, setStatus] = useState<
        null | "loading" | "success" | "error"
    >(null);

    async function login() {
        setStatus("loading");

        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "admin@admin.com",
                password: "password",
            }),
        });

        if (!response.ok) {
            return setStatus("error");
        }

        setStatus("success");
    }

    return (
        <div>
            <h1>Login</h1>
            {status || "Idle"}
            <button onClick={() => login()}>Do the login</button>
        </div>
    );
}
