import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["infos","form","card"]
  connect() {
    //console.log(this.infosTarget)
  }

  revealContent() {
    //console.log(this.infosTarget)
    this.infosTarget.classList.add("d-none")
    this.formTarget.classList.remove("d-none")
  }

  update(event) {
    // ajax request
    // prevent default from behaviour
    event.preventDefault()
    console.log("click on submit")
    // build the url for submit
    const url = this.formTarget.action
    // execute the ajax request
    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data
      })
  }
}
