class CustomFooter extends HTMLElement {
    companyTitle = 'Faculdade Horizonte azul'
    companyParagraph = 'A Faculdade Horizonte Azul é uma instituição de ensino superior privada, com sede em São Paulo, capital. Fundada em 2003, a instituição oferece cursos de graduação, pós-graduação e extensão em diversas áreas do conhecimento.'
    usefulLinksItens = [

    ];
    contactTitle = 'Contato'
    contactItens = [
        {
            label: 'E-mail',
            href: '#wa.me',
        },
    ];
    copyrightText = '© 2023 Copyright doacaoreacao.com';

    companyH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.companyTitle;
        return h1;
    };

    companyP = () => {
        let p = document.createElement('p');
        p.textContent = this.companyParagraph;
        return p;
    };

    linksH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.usefulLinksTitle;
        return h1;
    };

    linksUl = () => {
        const ul = document.createElement('ul');
        this.makeListItems(ul);
        return ul;
    };

    contactH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.contactTitle;
        return h1;
    };

    contactUl = () => {
        const ul = document.createElement('ul');
        this.makeIconedListItems(ul);
        return ul;
    };

    copyrightP = () => {
        let p = document.createElement('p');
        p.textContent = this.copyrightText;
        return p;
    };

    constructor() {
        super();
    }

    makeFooter() {
        this.classList.add('custom-footer');
        this.id = 'cfoot';
        this.appendChild(this.makeWrapperDiv());
    }

    makeListItems(ul) {
        this.usefulLinksItens.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = item.href;
            a.textContent = item.label;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }

    makeIconedListItems(ul) {
        this.contactItens.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = item.href;
            a.textContent = item.label;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }

    makeCompanyDiv() {
        const div = document.createElement('div');
        div.appendChild(this.companyH1());
        div.appendChild(this.companyP());
        return div;
    }

    makeUsefulLinksDiv() {
        const div = document.createElement('div');
        div.classList.add('useful-links');
        div.appendChild(this.linksH1());
        div.appendChild(this.linksUl());
        return div;
    }

    makeContactDiv() {
        const div = document.createElement('div');
        div.classList.add('contact');
        div.appendChild(this.contactH1());
        div.appendChild(this.contactUl());
        return div;
    }

    makeWrapperDiv() {
        const div = document.createElement('div');
        div.classList.add('wrapper');
        div.appendChild(this.makeCompanyDiv());
        div.appendChild(this.makeUsefulLinksDiv());
        div.appendChild(this.makeContactDiv());
        return div;
    }

    connectedCallback() {
        this.makeFooter();
    }
}

window.customElements.define('custom-footer', CustomFooter);
