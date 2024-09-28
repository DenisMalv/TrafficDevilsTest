import refsCommon from "./refsCommon";
import JustValidate from 'just-validate';

const {form} = refsCommon

const validate = new JustValidate('#form');


validate
  .addField('#form-name', [
    {
      rule: 'minLength',
      value: 3,
    },
  ])
  .addField('#form-email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
      errorMessage: 'Email required',
    },
  ])
  .addField('#form-message', [
    {
      rule: 'required',
    },  
  ])
  .addField('#form-checkbox', [
    {
        rule: 'required',
    },
  ]
) 
  .onSuccess((e) => {
    console.log('Validation passed!');
    e.preventDefault(); 

    const formData = new FormData(form)
    for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }
    // fetch('/submit', {
    //   method: 'POST',
    //   body: formData,
    // });
  });