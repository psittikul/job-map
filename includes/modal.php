<?php

/**
 * Modal that pops up after an action button is clicked, each time having its contents updated to match the action being called
 */
?>

<div class="modal" tabindex="-1" role="dialog" id="actionModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" data-target="#actionModal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form></form>
            </div>
            <div class="modal-footer">
            </div>
        </div>
    </div>
</div>