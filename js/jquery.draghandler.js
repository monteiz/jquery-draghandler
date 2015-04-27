/**
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

(function($) {

	$.fn.draghandler = function(callbacks) {

		var overElement = null;
		var elementToHandle = this;

		function onDragLeaveHandler() {

			if (overElement != null) {

				callbacks.onDragLeave.call(elementToHandle);

				overElement = null;

			}

		}

		function onDragEnterHandler(element) {

			if (overElement == null || overElement != element) {
				callbacks.onDragLeave.call(element);
				overElement = element;

				callbacks.onDragEnter.call(element);

			}

		}
		
		return this.each(function(index, element) {

			$(this).parent().on("dragenter", function(event) {

				onDragLeaveHandler();
				event.stopPropagation();

			});

			$(this).on("dragenter", function(event) {

				onDragLeaveHandler();
			
				$(document).one("keydown dragenter", function() {
					onDragLeaveHandler();
				});
				
				$("body").one("keydown dragenter", function() {
					onDragLeaveHandler();
				});
				
				$(this).one("mousemove", function() {
					onDragLeaveHandler();
				});
				
				onDragEnterHandler($(this));
				event.stopPropagation();

			});

		});

		return this;

	};

}(jQuery));
