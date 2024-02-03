const LABELS = {
  buttons: {
    workWithMe: 'Work with me',
    submit: 'Submit',
    back: 'Back'
  },
  form: {
    name: {
      field: 'from_name',
      label: 'Name',
      placeholder: 'John Doe',
      error: {
        empty: 'Name cannot be empty',
        atLeast: 'Name has to be at least 3 characters',
      } 
    },
    email: {
      field: 'from_email',
      label: 'Email',
      placeholder: 'john.doe@xyz.com',
      error: {
        empty: 'Email cannot be empty',
        valid: 'Email has to be valid',
      }
    },
    message: {
      field: 'message',
      label: 'Message',
      placeholder: 'Hello, I would like ask you...',
      error: {
        empty: 'Message cannot be empty',
        atLeast: 'Message has to be at least 15 characters',
        maxLength: 'Message has to be maximum 300 characters',
      }
    }
  },
  tabs: {
    contacts: {
      address: 'Tolentino, (MC), 62029, ITALY',
      email: 'riccardo.ferranti01@gmail.com',
      linkedin: 'https://www.linkedin.com/in/riccardoferranti',
      github: 'https://www.github.com/RiccardoFerranti'
    }
  },
  periods: {
    symplystacking: 'Present',
    catenamedia: '2016 - 2022',
    chiarezza: '2013 - 2016',
    kaleyra: '2008 - 2013',
    accenture: '2007 - 2008'
  },
  positions: {
    symplystacking: 'Senior Front End Developer',
    catenamedia: 'Senior Front End Developer',
    chiarezza: 'Front End / UI Developer',
    kaleyra: 'Front End / UI Developer',
    accenture: 'Analyst'
  },
  companies: {
    symplystacking: 'Simply Stacking',
    catenamedia: 'Catena Media',
    chiarezza: 'Chiarezza.it',
    kaleyra: 'Kaleyra',
    accenture: 'Accenture'
  },
  descriptions: {
    symplystacking: 'Developing Dapps in the Cosmos ecosystem.',
    catenamedia: `Development of applications with great business value for
    the company, interacting through REST API with Backend based on microservices.`,
    chiarezza: `Creation, mainteance, restyling and adding new features of the company website
    with mobile first approach.`,
    kaleyra: `Development and creation of UI for mobile and desktop
    applications.`,
    accenture: `Part of the backend EAI/ETL, planning activities with the
    final customer and managing the work between teams.`
  },
}

export default LABELS;