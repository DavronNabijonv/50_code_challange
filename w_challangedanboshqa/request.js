function getUniver({}){

  const inputText = document.getElementById('input').value;
  const checkValue = ()=>{

    if(!/^[a-zA-Z0-9_]+$/.test(inputText)){
      alert('xato malumot kiritildi')
      console.log('xato malumot kiritildi')
      return ''
    }
  }
}