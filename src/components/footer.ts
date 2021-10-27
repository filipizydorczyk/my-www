import { HTMLPath } from "html-elemnets";

export type FooterArgs = {
    name: string;
    email: string;
    description: string;
    photo: HTMLPath;
};

const Footer = ({ name, email, description, photo }: FooterArgs) => {
    return /* HTML */ `<footer class="footer">
        <div class="footer__profile-picture-section">
            <img src="${photo}" />
        </div>
        <div class="footer__text-section">
            <div class="footer__about-section">
                <h3>${name}</h3>
                <p class="footer__email">${email}</p>
                <p class="footer__description">${description}</p>
            </div>
        </div>
    </footer>`;
};

export default Footer;
