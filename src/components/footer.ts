import { HTMLUrl, Social } from "html-elemnets";

export type FooterArgs = {
    name: string;
    email: string;
    description: string;
    photo: HTMLUrl;
    socials: Array<Social>;
};

const Footer = ({ name, email, description, photo }: FooterArgs) => {
    return /* HTML */ `<footer class="footer">
        <div class="footer__profile-picture">
            <img src="${photo}" />
        </div>
        <div class="footer__info">
            <div class="footer__about">
                <h3>${name}</h3>
                <p class="footer__email">${email}</p>
                <p class="footer__description">${description}</p>
            </div>
            <div class="footer__socials"></div>
        </div>
    </footer>`;
};

export default Footer;
