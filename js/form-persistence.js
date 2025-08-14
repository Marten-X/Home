    const namev = document.getElementById('name')
    const emailv = document.getElementById('email');
    const textareav = document.getElementById('message');
    const myForm = document.getElementById('contactForm');

myForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    name: namev.value,
    email: emailv.value,
    message: textareav.value
  };
    const storedData = localStorage.getItem('allSubmissions');
    const allSubmissions = storedData ? JSON.parse(storedData) : [];

        allSubmissions.push(formData);

        localStorage.setItem('allSubmissions', JSON.stringify(allSubmissions));
});
