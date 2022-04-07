

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
    
    // Cause filter container to appear
    const filterContainerAppear = () => {
      document.querySelector('.filter-container').style.display = 'flex'
    }
    // Cause filter container to disappear
    const filterContainerDisappear = () => {
      document.querySelector('.filter-container').style.display = 'none'
    }
    
    // Decrementing list by clicking a role
    let role = document.querySelectorAll('.role')
    role.forEach(roleButton => {
      roleButton.addEventListener('click', () => {
        filterContainerAppear()
        const filterName=roleButton.innerHTML
        document.querySelector(`[data-name="${filterName.trim().toLowerCase()}"]`).style.display = 'flex'
        role.forEach(x => {
          if(x.innerHTML !== roleButton.innerHTML) {
            x.parentNode.parentNode.classList.add('no-display')
          }
        })
      })
    })

    // Decrementing list by clicking a level
    let level = document.querySelectorAll('.level')
    level.forEach(levelButton => {
      levelButton.addEventListener('click', () => {
        filterContainerAppear()
        const filterName=levelButton.innerHTML
        document.querySelector(`[data-name="${filterName.trim().toLowerCase()}"]`).style.display = 'flex'
        level.forEach(x => {
          if(x.innerHTML !== levelButton.innerHTML) {
            x.parentNode.parentNode.classList.add('no-display')
          }
        })
      })
    })

        // Decrementing list by clicking a language
        let language = document.querySelectorAll('.languages')
        language.forEach(langButton => {
          langButton.addEventListener('click', () => {
            filterContainerAppear()
            const filterName=langButton.innerHTML
            document.querySelector(`[data-name="${filterName.trim().toLowerCase()}"]`).style.display = 'flex'
            let languageContainers = document.querySelectorAll('.languages-container')
            languageContainers.forEach(lc => {
              const children = lc.querySelectorAll('.languages')
              let swtch = false
              children.forEach(child => {
                if(child.innerHTML == langButton.innerHTML) {
                  swtch = true
                }
              })
              if(swtch==false) {
                lc.parentNode.parentNode.classList.add('no-display')
              }
            })
          })
        })

        // Decrementing list by clicking a tool
        let tool = document.querySelectorAll('.tools')
        tool.forEach(toolButton => {
          toolButton.addEventListener('click', () => {
            filterContainerAppear()
            const filterName=toolButton.innerHTML
            document.querySelector(`[data-name="${filterName.trim().toLowerCase()}"]`).style.display = 'flex'
            let toolsContainers = document.querySelectorAll('.tools-container')
            toolsContainers.forEach(tc => {
              const children = tc.querySelectorAll('.tools')
              let swtch = false
              children.forEach(child => {
                if(child.innerHTML == toolButton.innerHTML) {
                  swtch = true
                }
              })
              if(swtch==false) {
                tc.parentNode.parentNode.classList.add('no-display')
              }
            })
          })
        })
    

    // program 'clear' button
    const clear = document.querySelector('.clear')
    clear.addEventListener('click', () => {
      filterContainerDisappear()
      const jobListings = document.querySelectorAll('.job-listing')
      const filter = document.querySelectorAll('.filter')
      jobListings.forEach(x => {
        x.classList.remove('no-display')
      filter.forEach(y => {
        y.style.display = 'none'
      })
      })

    })


})


