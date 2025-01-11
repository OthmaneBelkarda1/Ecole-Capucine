document.querySelector('.submit').addEventListener('click',() => {
  try {
    const response = fetch('https://capucinebackend.onrender.com/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ParentLastName: document.querySelector('.jsNameP').value,
        ParentFirstName: document.querySelector('.jsFirstNameP').value,
        StudentLastName: document.querySelector('.jsNameE').value,
        StudentFirstName: document.querySelector('.jsFirstNameE').value,
        Age: document.querySelector('.jsAge').value,
        Niveau: document.querySelector('.jsNiveau').value,
        Email: document.querySelector('.jsEmail').value,
        Numero: document.querySelector('.jsNumero').value,
      }),
    });

    alert('Votre inscription est confirmée!');
    location.reload();
  } catch (error) {
    console.error('Error:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
});