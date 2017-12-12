(function($) {
  $(document).ready(function() {
    $('.handle').closest('tbody').activeAdminSortable();
  });

  $.fn.activeAdminSortable = function() {
    this.sortable({
      update: function(event, ui) {
        var elem = ui.item.find('[data-sort-url]'),
          url = elem.data('sort-url'),
          fromPos = elem.data('position'),
          order = elem.data('order') || 'asc',
          toPos;

        // Find the new position of the moved element through the new position of the kicked out element.
        toPos = ui.item.next().find('[data-position]').data('position');
        if (toPos === undefined || (order == 'asc' && toPos > fromPos) || (order == 'desc' && toPos < fromPos)) {
          toPos = ui.item.prev().find('[data-position]').data('position');
        }

        $.ajax({
          url: url,
          type: 'post',
          data: { position: toPos },
          success: function() { window.location.reload() }
        });
      }
    });

    this.disableSelection();
  }
})(jQuery);
