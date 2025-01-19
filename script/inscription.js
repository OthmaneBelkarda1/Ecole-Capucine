
document.querySelector('.submit').addEventListener('click',() => {
  if (!document.querySelector('.jsNameP').value || !document.querySelector('.jsFirstNameP').value
   || ! document.querySelector('.jsNameE').value || !document.querySelector('.jsFirstNameE').value|| 
    !document.querySelector('.jsAge').value || !document.querySelector('.jsEmail').value || !document.querySelector('.jsNumero').value
) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
  }
  try {
    const response = fetch('http://213.130.147.62:3000/articles ', {
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
    setTimeout(function() {
      location.reload();
    }, 3000);
    
    

  } catch (error) {
    console.error('Error:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
});
