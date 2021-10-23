var movies=[
    {
        naziv:"Vrelina",  
        godina: 1995,
        drzava:"SAD",  
        napomena: "", 
        glumci: ["AL Pacino", " Robert De Niro", " Val Kilmer"],
        seen: false
    },
    {
        naziv:"Prestiž",  
        godina: 2006,
        drzava:"UK",  
        napomena: "", 
        glumci: ["Christian Bale", " Hugh Jackman", " Scarlett Johansson"],
        seen: false
    },
    {
        naziv:"Uhvati me ako možeš",  
        godina: 2002,
        drzava:"SAD",  
        napomena: "", 
        glumci: ["Leonardo DiCaprio", " Tom Hanks", " Christopher Walken"],
        seen: false 
    }
];

var numbOfSeen=0;

function display_table(){
    let tableHTML="";
    let rowColor="";
    let check="";
    movies.forEach((elem, index) => {
        if(elem.seen){
            rowColor="#D1E7DD";
            check="checked";
        }
        else{
            check="";
            rowColor="#F8D7DA";
        }
        tableHTML+=` <tr id="tr_${elem.naziv}" style="background-color: ${rowColor};">
                        <td><input type="checkbox" id="${elem.naziv}" onclick="changeColor('${elem.naziv}', ${index})" ${check}></td>
                        <td>${elem.naziv}</td>
                        <td>${elem.godina}</td>
                        <td>${elem.drzava}</td>
                        <td>${elem.napomena}</td>
                        <td>${elem.glumci}</td>
                    </tr>
                    `
    });
    document.getElementById("table_body").innerHTML=tableHTML;
    numberOfSeenMovies();
    numberOfMovies();
}

function showModal(){
    let modalHTML=`<!-- Button trigger modal -->
    <button type="button" class="mb-4 btnAddMovie float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Dodaj film
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form class="modal-content" id="forma">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Dodaj novi film</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <label for="" class="form-label">Naziv filma</label>
          <input type="text" class="form-control mb-3" id="naziv_input" placeholder="Naziv filma" required>
          <label for="" class="form-label">Godina kada je izašao</label>
          <input type="number" class="form-control mb-3" id="godina_input" placeholder="2000" min="1930" max="2021">
          <label for="" class="form-label">Zemlja porijekla</label>
          <input type="text" class="form-control mb-3" placeholder="Zemlja porijekla" id="drzava_input">
          <label for="" class="form-label">Napomena</label>
          <input type="text" class="form-control mb-3" id="napomena_input" placeholder="Napomena...">
          <label for="" class="form-label">Glumci</label>
          <input type="text" class="form-control mb-3" id="glumci_input" placeholder="glumci" required>
          <div class="form-text">Odvajajte glumce zarezom</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </form>
      </div>
    </div>`;

    document.getElementById("showModal").innerHTML=modalHTML;

    document.getElementById("forma").addEventListener('submit',(e)=>{
        e.preventDefault();
        addNewMovie();
    });

}

function userInput(){
    let naziv  = document.getElementById("naziv_input").value;
    let godina = document.getElementById("godina_input").value;
    let drzava = document.getElementById("drzava_input").value;
    let napomena = document.getElementById("napomena_input").value;
    let glumci = document.getElementById("glumci_input").value;
    
    //zasto mi mice celu tabelu kad je ovo ukljuceno
    document.getElementById("naziv_input").value = "";
    document.getElementById("godina_input").value = "";
    document.getElementById("drzava_input").value = "";
    document.getElementById("napomena_input").value = "";
    document.getElementById("glumci_input").value = "";
     
    return {
    naziv:  naziv,
    godina: godina,
    drzava: drzava,
    napomena: napomena,
    glumci: glumci,
    seen: false
    }
}

function addNewMovie(){
    let movie=userInput();
    movies.push(movie);
    display_table();

}

function changeColor(id, index){
    let checkbox=document.getElementById(id);
    let row = document.getElementById(`tr_${id}`);
    if(checkbox.checked){
        row.style.backgroundColor="#D1E7DD";
        movies[index].seen=true;
        numbOfSeen++;
    }
    else{
        row.style.backgroundColor="#F8D7DA";
        movies[index].seen=false;
        numbOfSeen--;
    }
    document.getElementById("seenMovies").innerHTML=numbOfSeen;
}

function numberOfSeenMovies(){
    let count =0;
    movies.forEach(movie => {
        if(movie.seen)
            count++;
    });
    numbOfSeen=count;
    document.getElementById("seenMovies").innerHTML=count;
}

function numberOfMovies(){
    document.getElementById("totalMovies").innerHTML=movies.length;
}

display_table();
showModal();


//treba jos podesiti da se boja ne resetuje kad se doda novi film
//125 ne radi onaj shit da vidi koliko je filmova pogledano



