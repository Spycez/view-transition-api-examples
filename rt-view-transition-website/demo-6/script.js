const phones = [
    {
        id: 1,
        name: 'First Phone',
        description: 'Curabitur ac ornare dolor. Duis sit amet nisi eu risus eleifend condimentum. Donec tempor facilisis mi quis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem pharetra, maximus felis ut, aliquet mauris.',
        image: 'phone1.png'
    },
    {
        id: 2,
        name: 'Second Phone',
        description: 'In feugiat eros leo, at aliquet justo pretium sed. Fusce velit eros, tristique vitae egestas eget, gravida eu velit. Donec semper varius faucibus. Ut facilisis lorem odio, nec ultrices felis blandit ac.',
        image: 'phone2.png'
    },
    {
        id: 3,
        name: 'Third Phone',
        description: 'Praesent et consectetur turpis. Proin non mollis nisi. Pellentesque neque lorem, pulvinar a porttitor ut, posuere ac turpis. Etiam efficitur mauris sit amet posuere faucibus.',
        image: 'phone3.png'
    },
    {
        id: 4,
        name: 'Fourth Phone',
        description: 'Maecenas mattis ligula a lectus suscipit, ut dignissim lectus eleifend. Etiam convallis augue eget leo interdum, ac pellentesque turpis convallis. Proin iaculis ante non arcu consectetur semper. Quisque accumsan justo in dui convallis eleifend. Donec auctor sagittis quam in dignissim.',
        image: 'phone4.png'
    }
];

const asideContainer = document.querySelector('section.aside');

const phoneImage = document.querySelector('div.product-image img');
const phoneName = document.querySelector('div.product-info h1');
const phoneDescription = document.querySelector('div.product-info p');

const imageFolder = '/images/phones';

function init() {

    // Create thumbnails.
    phones.forEach((phone) => {
        const a = document.createElement('a');
        a.href = "#";
        a.dataset.id = phone.id;
        
        const img = document.createElement('img');
        img.alt = phone.name;
        img.src = `${imageFolder}/${phone.image}`;
        a.appendChild(img);

        const span = document.createElement('span');
        span.textContent = phone.name;
        a.appendChild(span);
        
        asideContainer.appendChild(a);

        a.addEventListener('click', updateView);
    });

    // Show first phone.
    showPhoneData(phones[0]);
}

function showPhoneData(phone) {
    phoneImage.src = `${imageFolder}/${phone.image}`;
    phoneImage.alt = phone.name; 
    phoneName.textContent = phone.name;
    phoneDescription.textContent = phone.description;
}

function updateView(event) {
    const itemElement = event.currentTarget;
    const phoneId = +itemElement.dataset.id;
    const phone = phones.find((x) => x.id === phoneId);

    const displayNewPhone = () => {
        showPhoneData(phone);
    };

    // Fallback for browsers that don't support View Transitions:
    if (!document.startViewTransition) {
        displayNewPhone();
        return;
    }

    // Use View Transition.
    document.startViewTransition(() => displayNewPhone());
}

init();

