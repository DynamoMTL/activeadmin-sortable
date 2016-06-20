(function($) {
  $(document).ready(function() {
    $('.handle').closest('tbody').activeAdminSortable();
  });

  $.fn.activeAdminSortable = function() {
    this.sortable({
      update: function(event, ui) {
        var url = ui.item.find('[data-sort-url]').data('sort-url');

        $.ajax({
          url: url,
          type: 'post',
          data: { position: ui.item.index() + 1 },
          success: function() { window.location.reload() }
        });
      }
    });

    this.disableSelection();
  }
})(jQuery);
