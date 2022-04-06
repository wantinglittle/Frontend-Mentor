

fetch("data.json")
.then(response => response.json())
.then(data => {
    const container = document.querySelector('.container')


    for (let i = 0; i < data.length; i++){
      let languages = ''
      for (let h = 0; h < data[i].languages.length; h++){
        languages += `
          <div class="languages">
          ${data[i].languages[h]}
          </div>
        `
      }

      let tools = ''
      for (let j = 0; j < data[i].tools.length; j++){
        tools += `
          <div class="tools">
          ${data[i].tools[j]}
          </div>
        `
      }
      //display 'new' tag if applicable
      let newTrue = ' no-display">'
      if (data[i].new == true) {
        newTrue = '">NEW!'
      }
      //display 'featured' tag if applicable
      let leftBar = ''
      let featuredTrue = ' no-display">'
      if (data[i].featured == true) {
        featuredTrue = '">FEATURED'
        leftBar = ' left-bar'
      }

        const item = `
        <div class="job-listing${leftBar}">
            <div class="col-one">
            <img src="${data[i].logo}" class="logo">
            </div>
            <div class='col-two'>
              <div class="company-name">
                <div>${data[i].company}</div>
                <div class="new${newTrue}</div>
                <div class="featured${featuredTrue}</div>
              </div>
              <div class="job-title">
                ${data[i].position}
              </div>
              <div class="other-info">
                ${data[i].postedAt} &nbsp &#183 &nbsp ${data[i].contract} &nbsp &#183 &nbsp ${data[i].location} 
              </div>
            </div>
            <div class='col-three'>
              <div class="role">
               ${data[i].role}
              </div>
              <div class="level">
               ${data[i].level}
              </div>
              <div class="languages-container">` +
                languages  +
             `</div>
              <div class="tools-container">` +
                tools +
              `</div>
            </div>
        </div>
        `
        container.innerHTML += item
        
    }        
    let role = document.querySelectorAll('.role')
    role.forEach(roleButton => {
      roleButton.addEventListener('click', () => {
        role.forEach(x => {
          if(x.class !== roleButton.class) {
            roleButton.parentNode.parentNode.classList.add('no-display')
          }
        })
        
      })
    })





})


