
var todaytask = 
`

<div class="p-3">
<div class="bg rounded-3 mb-1 psbbtn">
        <p class="fs-4 fw-bold text-center">Today's Tasks</p>
      </div>
      <div>
      <form action="#" id="man_date_form" >
        <div class="m-3">
          <label for="manual_date" class="form-label fw-bold fs-5 me-3">Insert date</label>
          <input type="date" id="manual_date" class="form-control w-auto d-inline me-1">
          <button class="btn btn-primary me-3" type="submit">Get</button>
        </div>
      </form>
    </div>
      <!-- List of task -->
        <table class="w-100 table-hover table nowrap" id="newdt">
          <thead class="bg-primary-subtle border-primary border">
            <tr>
              <th></th>
              <th>Task</th>
              <th>Total Duration</th>
              <th>Notes</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody class="border">
           
          </tbody>
        </table>
    </div>





    

      <!-- Modal Body -->
      <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
      <div
        class="modal fade"
        id="task_edit_modal"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Update Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="task_form_close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="#" novalidate id="edit_task_form">
                <div class="col-12 mb-3 d-flex justify-content-between">
                  <input type="text" id="taskTitle" class="form-control-plaintext fs-5 fw-bold" name="task title" aria-describedby="helpId" value="Reading Book" readonly/>
                  <button type="button" class="btn btn-primary rounded-3 w-25" id="add-interval">Add Interval</button>
                </div>
                <div class="col-12 mb-3 ps-3">
                  <label for="Note" class="form-label">Note</label>
                  <textarea name="Note" id="Note" cols="30" rows="1" class="form-control"></textarea>
                </div>
                <div id="all-intervals">
                  <div class="d-flex justify-content-between align-items-end mb-4" id="IC-1">
                    <div class="row w-100 px-0 mx-0">
                      <div class="col">
                        <label for="Start Time" class="form-label">Start Time</label>
                        <input type="time" class="form-control StartTime" name="Start Time" id="StartTime" aria-describedby="helpId"/>
                      </div>
                      <div class="col">
                        <label for="End Time" class="form-label">End Time</label>
                        <input type="time" class="form-control EndTime" name="End Time" id="EndTime" aria-describedby="helpId"/>
                      </div>     
                    </div>
                    <div>
                      <button class="btn btn-danger invisible">Delete</button>
                    </div>    
                  </div>   
                </div>        
                <div class="text-end">
                  <button type="submit" data-bs-dismiss="modal" class="btn btn-primary" id="save_task_detail_btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>


    </div>
    `
