<!-- Modal -->
<div class="modal fade" id="editUserModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Izmjena korisnika</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form action="./update_user.php" method="POST">
          <div class="row">
              <input type="hidden" id="editModalId" name="hiddenID" value="">
              <div class="col-12">
                  <input type="text" name="first_name" id="editModalFirstName" class="form-control" placeholder="Unesite ime">
              </div>
              <div class="col-12 mt-3">
                  <input type="text" name="last_name" id="editModalLastName" class="form-control" placeholder="Unesite prezime">
              </div>
              <div class="col-12 mt-3">
                  <input type="email" name="email" id="editModalEmail" class="form-control" placeholder="Unesite e-mail adresu">
              </div>
              <div class="col-12 mt-3">
                <select class="form-select" id="editModalCountry" name="country" onchange="getCities(value, 'editModalCity')">
                    <?php
                        $countr=getUsersFromFile("countries.txt");
                        foreach($countr as $c){
                            echo "<option id='country".$c['name']."' value=".$c['id'].">".$c['name']."</option>";
                        }
                    ?>
                </select>
              </div>
              <div class="col-12 mt-3">
                <select class="form-select" id="editModalCity" name="city">
                    
                </select>
          </div>

          <div class="row mt-3">
              <div class="col-4 offset-4">
                  <button class="btn btn-success w-100">Dodaj korisnika</button>
              </div>
          </div>
      </form>

      </div>
    </div>
  </div>
</div>