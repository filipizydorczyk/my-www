export type ContactMessageArgs = {
    title: string;
    message: string;
};

const ContactMessage = ({ title, message }: ContactMessageArgs) => {
    return /* HTML */ `<div class="contact-message">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm10 4h4v2h-4v-2zm-3-5h7v2h-7v-2zm2-5h5v2h-5V7z"
            />
        </svg>
        <div class="contact-message__texts">
            <h1>${title}</h1>
            <p>${message}</p>
        </div>
    </div>`;
};

export default ContactMessage;
