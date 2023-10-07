import { logout } from "./actions";

export default function () {
    return (
        <div>
            <h1>Services</h1>
            <form action={logout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
}
