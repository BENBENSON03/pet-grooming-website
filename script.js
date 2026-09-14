const groomers = [
  { name: 'Maya Chen', specialty: 'Fear-free cat & small dog care', experience: '11 years', rating: '5.0', location: 'Brooklyn Heights', availability: 'Available this week', status: 'open', image: 'img/photo-1551836022-d5d88e9218df.jpg' },
  { name: 'Theo Bennett', specialty: 'Breed styling & hand-stripping', experience: '9 years', rating: '4.9', location: 'West Village', availability: 'Limited openings', status: 'limited', image: 'img/photo-1601758174114-e711c0cbaa69.jpg' },
  { name: 'Amara Lewis', specialty: 'Deshedding & skin wellness', experience: '14 years', rating: '5.0', location: 'Park Slope', availability: 'Available tomorrow', status: 'open', image: 'img/photo-1558788353-f76d92427f16.jpg' },
  { name: 'Jonah Park', specialty: 'Puppy introductions & spa days', experience: '7 years', rating: '4.8', location: 'Williamsburg', availability: 'Waitlist only', status: 'off', image: 'img/photo-1525253013412-55c1a69a5738.jpg' }
];

const businesses = [
  { name: 'Moss & Mane Grooming', location: 'Brooklyn Heights', type: 'Full service', pet: 'Dogs', price: 85, rating: 5.0, available: 'Today', hours: '8:00am - 6:00pm', image: 'img/photo-1552053831-71594a27632d.jpg', services: ['Bathing', 'Haircuts'] },
  { name: 'The Purrfect Parlour', location: 'West Village', type: 'Cat care', pet: 'Cats', price: 70, rating: 4.9, available: 'Tomorrow', hours: '9:00am - 5:00pm', image: 'img/photo-1573865526739-10659fec78a5.jpg', services: ['Cat grooming', 'Nail trim'] },
  { name: 'Clover Club Canine', location: 'Park Slope', type: 'Full service', pet: 'Dogs', price: 110, rating: 4.8, available: 'This week', hours: '7:30am - 7:00pm', image: 'img/photo-1517849845537-4d257902454a.jpg', services: ['Breed styling', 'Spa'] },
  { name: 'Tidy Tails Mobile', location: 'Williamsburg', type: 'Mobile', pet: 'Dogs & cats', price: 95, rating: 4.9, available: 'Tomorrow', hours: '8:30am - 4:30pm', image: 'img/photo-1548199973-03cce0bbc87b.jpg', services: ['Mobile grooming', 'Bathing'] },
  { name: 'Kindred Coat Studio', location: 'Cobble Hill', type: 'Wellness', pet: 'Dogs', price: 75, rating: 4.7, available: 'Today', hours: '9:00am - 6:00pm', image: 'img/photo-1543466835-00a7907e9de1.jpg', services: ['Deshedding', 'Skin care'] },
  { name: 'Paws on Fifth', location: 'Upper East Side', type: 'Full service', pet: 'Dogs & cats', price: 130, rating: 5.0, available: 'This week', hours: '8:00am - 8:00pm', image: 'img/photo-1583511655857-d19b40a7a54e.jpg', services: ['Haircuts', 'Flea treatment'] },
  { name: 'Juniper Pet Spa', location: 'Fort Greene', type: 'Spa', pet: 'Dogs', price: 120, rating: 4.8, available: 'Tomorrow', hours: '10:00am - 6:00pm', image: 'img/photo-1586671267731-da2cf3ceeb80.jpg', services: ['Spa treatment', 'Nail trim'] },
  { name: 'Good Dog Workshop', location: 'Red Hook', type: 'Breed styling', pet: 'Dogs', price: 105, rating: 4.6, available: 'Waitlist', hours: '8:00am - 5:00pm', image: 'img/photo-1558788353-f76d92427f16.jpg', services: ['Breed styling', 'Hand stripping'] },
  { name: 'Whisker Works', location: 'Carroll Gardens', type: 'Cat care', pet: 'Cats', price: 65, rating: 4.9, available: 'Today', hours: '9:00am - 4:00pm', image: 'img/photo-1519052537078-e6302a4968d4.jpg', services: ['Cat grooming', 'Deshedding'] },
  { name: 'The Groom Room', location: 'DUMBO', type: 'Full service', pet: 'Dogs & cats', price: 90, rating: 4.7, available: 'This week', hours: '8:30am - 6:30pm', image: 'img/photo-1583337130417-3346a1be7dee.jpg', services: ['Bathing', 'Haircuts'] }
];

function renderGroomers() {
  const target = document.querySelector('[data-groomers]');
  if (!target) return;
  target.innerHTML = groomers.map((groomer, index) => `<article class="groomer-card reveal" style="animation-delay:${index * 80}ms"><img class="groomer-photo" src="${groomer.image}" alt="${groomer.name}, professional pet groomer"><div class="groomer-info"><div class="groomer-meta"><span>${groomer.location}</span><span class="rating">â˜… ${groomer.rating}</span></div><h3>${groomer.name}</h3><p>${groomer.specialty}</p><div class="availability ${groomer.status}">${groomer.availability}</div><div class="calendar"><span class="day today">M</span><span class="day open">T</span><span class="day open">W</span><span class="day ${groomer.status === 'off' ? '' : 'open'}">T</span><span class="day ${groomer.status === 'off' ? '' : 'open'}">F</span><span class="day">S</span></div><small>${groomer.experience} experience</small></div></article>`).join('');
}

function businessCard(business, index) {
  return `<article class="business-card reveal" style="animation-delay:${(index % 6) * 60}ms"><img class="business-image" src="${business.image}" alt="${business.name} grooming studio"><div class="business-info"><div class="business-top"><div><h3>${business.name}</h3><div class="business-location">${business.location} Â· ${business.pet}</div></div><span class="rating">â˜… ${business.rating}</span></div><div class="tags">${business.services.map(service => `<span class="tag">${service}</span>`).join('')}</div><div class="hours">Open today Â· ${business.hours}</div><div class="business-bottom"><span class="price">From $${business.price}</span><button class="button button-dark book-button" data-business="${business.name}">Book now</button></div></div></article>`;
}

function renderDirectory() {
  const target = document.querySelector('[data-directory]');
  if (!target) return;
  const search = document.querySelector('[data-search]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('[data-result-count]');
  const apply = () => {
    const term = (search?.value || '').toLowerCase().trim();
    const values = Object.fromEntries(filters.map(filter => [filter.dataset.filter, filter.value]));
    const matches = businesses.filter(item => {
      const textMatch = [item.name, item.location, item.type, item.pet, ...item.services].join(' ').toLowerCase().includes(term);
      const locationMatch = !values.location || item.location === values.location;
      const typeMatch = !values.type || item.type === values.type;
      const petMatch = !values.pet || item.pet.includes(values.pet);
      const priceMatch = !values.price || (values.price === 'under-80' ? item.price < 80 : values.price === '80-110' ? item.price >= 80 && item.price <= 110 : item.price > 110);
      const ratingMatch = !values.rating || item.rating >= Number(values.rating);
      const availabilityMatch = !values.availability || item.available === values.availability;
      return textMatch && locationMatch && typeMatch && petMatch && priceMatch && ratingMatch && availabilityMatch;
    });
    target.innerHTML = matches.length ? matches.map(businessCard).join('') : '<div class="no-results">No grooming matches yet. Try widening your filters.</div>';
    if (count) count.textContent = `${matches.length} trusted places to explore`;
    bindBookingButtons();
  };
  search?.addEventListener('input', apply);
  filters.forEach(filter => filter.addEventListener('change', apply));
  apply();
}

function bindBookingButtons() {
  document.querySelectorAll('.book-button, [data-book]').forEach(button => button.addEventListener('click', () => {
    const modal = document.querySelector('[data-modal]');
    const chosen = document.querySelector('[data-chosen]');
    if (chosen) chosen.textContent = button.dataset.business || 'your preferred groomer';
    modal?.classList.add('visible');
  }));
}

function setupBookingForm() {
  const form = document.querySelector('[data-booking-form]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    button.textContent = 'Request received';
    button.disabled = true;
    const message = document.querySelector('[data-form-message]');
    if (message) message.textContent = 'Thank you. Our concierge will confirm your appointment shortly.';
  });
}

function setupModal() {
  const modal = document.querySelector('[data-modal]');
  if (!modal) return;
  modal.addEventListener('click', event => { if (event.target === modal || event.target.closest('[data-close-modal]')) modal.classList.remove('visible'); });
}

function setupNavigation() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const links = document.querySelector('[data-nav-links]');
  toggle?.addEventListener('click', () => links?.classList.toggle('open'));
}

document.addEventListener('DOMContentLoaded', () => { renderGroomers(); renderDirectory(); bindBookingButtons(); setupBookingForm(); setupModal(); setupNavigation(); });
