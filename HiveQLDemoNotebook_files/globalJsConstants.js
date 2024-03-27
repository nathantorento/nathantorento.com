










<!DOCTYPE html>



<html lang="en">
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="utf-8">
  <title>Hue 
 
    - Welcome to Hue
</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="/static/desktop/art/favicon.2351422f4956.ico" />
  <meta name="description" content="">
  <meta name="author" content="">

  <link href="/static/desktop/css/roboto.895233d7bf84.css" rel="stylesheet">
  <link href="/static/desktop/ext/css/cui/cui.5bfb0d381388.css" rel="stylesheet">
  <link href="/static/desktop/ext/css/cui/bootstrap2.f5cb5f78541c.css" rel="stylesheet">
  <link href="/static/desktop/ext/css/cui/bootstrap-responsive2.e47b2a557fdc.css" rel="stylesheet">

  <link href="/static/desktop/ext/css/font-awesome.min.bf0c425cdb73.css" rel="stylesheet">
  <link href="/static/desktop/css/hue3.89f8ea7a2b07.css" rel="stylesheet">
  <link href="/static/desktop/css/hue3-extra.02c1a2576154.css" rel="stylesheet">

  <style type="text/css">
      body {
        display: none;
        visibility: hidden;
        padding-top: 50px;
      }
  </style>

  
  <!--[if lt IE 9]>
  <script type="text/javascript">
    if (document.documentMode && document.documentMode < 9){
      location.href = "/boohoo";
    }
  </script>
  <![endif]-->


  <script type="text/javascript">
    // check if it's a Firefox < 7
    var _UA = navigator.userAgent.toLowerCase();
    for (var i = 1; i < 7; i++) {
      if (_UA.indexOf("firefox/" + i + ".") > -1) {
        location.href = "/boohoo";
      }
    }

    // check for IE document modes
    if (document.documentMode && document.documentMode < 9){
      location.href = "/boohoo";
    }

    // sets a global variable to see if it's IE11 or not
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  </script>


  <script src="/desktop/globalJsConstants.js"></script>

  <script src="/static/desktop/js/hue.errorcatcher.34bb8f5ecd32.js"></script>

    <script type="text/javascript" src="/static/desktop/js/bundles/login/login-bundle-9cd98892c317a166451a.39567977e8f9.js" ></script>

  <script src="/static/desktop/js/bootstrap-tooltip.261b2037a7e2.js"></script>
  <script src="/static/desktop/js/bootstrap-typeahead-touchscreen.cae1442a99be.js"></script>
  <script src="/static/desktop/ext/js/bootstrap-better-typeahead.min.0f8beff3bf3c.js"></script>
  <script src="/static/desktop/js/popover-extra-placements.b89dd43e6070.js"></script>
  <script src="/static/desktop/ext/js/moment-with-locales.min.02b7d6129313.js"></script>
  <script src="/static/desktop/ext/js/moment-timezone-with-data.min.049191c54143.js" type="text/javascript" charset="utf-8"></script>
  <script src="/static/desktop/ext/js/tzdetect.ef3b0cc75b84.js" type="text/javascript" charset="utf-8"></script>


  <script src="/static/desktop/js/ace/ace.f9cb7bd9944d.js"></script>
  <script src="/static/desktop/js/ace/mode-impala.c165006bc7e6.js"></script>
  <script src="/static/desktop/js/ace/mode-hive.aa39b2e1f033.js"></script>
  <script src="/static/desktop/js/ace/ext-language_tools.1effa172ad3e.js"></script>
  <script src="/static/desktop/js/ace.extended.991c01fc759f.js"></script>

  <script>
    ace.config.set("basePath", "/static/desktop/js/ace");
  </script>

  <script src="/static/metastore/js/metastore.model.8651ce394599.js"></script>

  
  <script type="text/html" id="hue-ace-autocompleter">
    <!-- ko if: active() && (suggestions.filtered().length !== 0 || suggestions.loading()) -->
    <div class="hue-ace-autocompleter" data-bind="style: { top: top() + 'px', left: left() + 'px' }">
      <div class="autocompleter-suggestions">
        <!-- ko if: suggestions.availableCategories().length > 1 || suggestions.loading() -->
        <div class="autocompleter-header">
          <!-- ko if: suggestions.availableCategories().length > 1 -->
          <div class="autocompleter-categories" data-bind="foreach: suggestions.availableCategories()">
            <div data-bind="text: label, css: { 'active': $parent.suggestions.activeCategory() === $data }, style: { 'border-color': $parent.suggestions.activeCategory() === $data ? color : 'transparent' }, click: function (data, event) { $parent.suggestions.activeCategory($data); event.stopPropagation(); $parent.editor().focus(); }"></div>
          </div>
          <!-- /ko -->
          <div class="autocompleter-spinner"><!-- ko hueSpinner: { spin: suggestions.loading, size: 'small' } --><!-- /ko --></div>
        </div>
        <!-- /ko -->
        <div class="autocompleter-entries">
          <div data-bind="foreachVisible: { data: suggestions.filtered, minHeight: 25, container: '.autocompleter-entries' }">
            <div class="autocompleter-suggestion" data-bind="click: function () { $parent.selectedIndex($index() + $indexOffset()); $parent.insertSuggestion(); $parent.editor().focus(); },
                css: { 'selected': $index() + $indexOffset() === $parent.selectedIndex() },
                event: { 'mouseover': function () { $parent.hoveredIndex($index() + $indexOffset()); }, 'mouseout': function () { $parent.hoveredIndex(null); } }">
              <div class="autocompleter-suggestion-value">
                <div class="autocompleter-dot" data-bind="style: { 'background-color': category.color }"></div> <span data-bind="matchedText: { suggestion: $data, filter: $parent.suggestions.filter }"></span> <!-- ko if: details && details.primary_key === 'true' --><i class="fa fa-key"></i><!-- /ko -->
              </div>
              <div class="autocompleter-suggestion-meta"><!-- ko if: popular --><i class="fa fa-star-o popular-color"></i> <!-- /ko --><span data-bind="text: meta"></span></div>
            </div>
          </div>
        </div>
      </div>
      <!-- ko if: focusedEntry() && focusedEntry().details -->
      <!-- ko template: { name: 'autocomplete-' + (focusedEntry().hasCatalogEntry ? 'catalog-details-' : 'details-') + focusedEntry().category.detailsTemplate, data: focusedEntry } --><!-- /ko -->
      <!-- /ko -->
    </div>
    <!-- /ko -->
  </script>

  <script type="text/html" id="autocomplete-details-keyword">
  </script>

  <script type="text/html" id="autocomplete-details-solr-field">
  </script>

  <script type="text/html" id="autocomplete-catalog-details-solr-field">
  </script>

  <script type="text/html" id="autocomplete-details-udf">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-superscript"></i> <span data-bind="text: details.signature.substring(0, details.signature.indexOf('('));"></span></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: details.signature"></div>
          <div class="details-description" data-bind="text: details.description"></div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-option">
    <div class="autocompleter-details">
      <div class="autocompleter-header" data-bind="text: value"></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code">Type: <span data-bind="text: details.type"></span></div>
          <div class="details-code">Default: <span data-bind="text: details.default"></span></div>
          <div class="details-description" data-bind="text: details.description"></div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-database">
  </script>

  <script type="text/html" id="autocomplete-catalog-details-database">
    <div class="autocompleter-details">
      <div class="autocompleter-header">
        <i class="fa fa-fw fa-database"></i> <span data-bind="text: details.getTitle()"></span>
      </div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" data-bind="component: { name: 'dataCatalogMiniContext', params: { catalogEntry: details } }">
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-table">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw" data-bind="css: { 'fa-eye': details.type.toLowerCase() !== 'table', 'fa-table': details.type.toLowerCase() === 'table' }"></i> <span data-bind="text: details.name"></span></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-attribute" ><i class="fa fa-database fa-fw"></i> <span data-bind="text: details.database"></span></div>
          <!-- ko if: typeof details.popularity !== 'undefined' -->
          <div class="details-popularity margin-left-5" data-bind="tooltip: { title: 'Popularity ' + details.popularity.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.popularity.relativePopularity + '%' }"></div>
            </div>
          </div>
          <!-- /ko -->
          <!-- ko if: typeof details.comment !== 'undefined' && details.comment !== null -->
          <div class="details-comment" data-bind="matchedText: { suggestion: $data, filter: $parent.suggestions.filter, isComment: true }"></div>
          <!-- /ko -->
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-catalog-details-table">
    <div class="autocompleter-details">
      <div class="autocompleter-header">
        <i class="fa fa-fw" data-bind="css: { 'fa-eye': details.isView(), 'fa-table': details.isTable() }"></i> <span data-bind="text: details.getTitle()"></span>
        <!-- ko if: popular() && relativePopularity -->
        <div class="autocompleter-header-popularity" data-bind="tooltip: { title: 'Popularity ' + relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i></div>
        <!-- /ko -->
      </div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" data-bind="component: { name: 'dataCatalogMiniContext', params: { catalogEntry: details } }">
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-column">
    <!-- ko if: typeof details.name !== 'undefined' -->
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-columns"></i> <span data-bind="text: details.name"></span></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <!-- ko if: typeof details.database !== 'undefined' && typeof details.table !== 'undefined' -->
          <div class="details-attribute" ><i class="fa fa-table fa-fw"></i> <span data-bind="text: details.database"></span>.<span data-bind="text: details.table"></span></div>
          <!-- /ko -->
          <!-- ko if: typeof partitionKey !== 'undefined' && partitionKey -->
          <div class="details-attribute" ><i class="fa fa-key fa-fw"></i> Partition key</div>
          <!-- /ko -->
          <!-- ko if: typeof details.primary_key !== 'undefined' && details.primary_key === 'true' -->
          <div class="details-attribute" ><i class="fa fa-key fa-fw"></i> Primary key</div>
          <!-- /ko -->
          <!-- ko if: typeof details.popularity !== 'undefined' -->
          <br/>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Popularity ' + details.popularity.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.popularity.relativePopularity + '%' }"></div>
            </div>
          </div>
          <!-- /ko -->
          <!-- ko if: typeof details.comment !== 'undefined' && details.comment !== null -->
          <div class="details-comment" data-bind="matchedText: { suggestion: $data, filter: $parent.suggestions.filter, isComment: true }"></div>
          <!-- /ko -->
        </div>
      </div>
    </div>
    <!-- /ko -->
  </script>

  <script type="text/html" id="autocomplete-catalog-details-column">
    <div class="autocompleter-details">
      <div class="autocompleter-header">
        <i class="fa fa-fw fa-columns"></i> <span data-bind="text: details.name"></span>
        <!-- ko if: popular() && relativePopularity -->
        <div class="autocompleter-header-popularity" data-bind="tooltip: { title: 'Popularity ' + relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i></div>
        <!-- /ko -->
      </div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" data-bind="component: { name: 'dataCatalogMiniContext', params: { catalogEntry: details } }">
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-variable">
  </script>

  <script type="text/html" id="autocomplete-details-hdfs">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw" data-bind="css: { 'fa-folder-o': details.type === 'dir', 'fa-file-o': details.type !== 'dir' }"></i> <span data-bind="text: details.name"></span></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <!-- ko with: details -->
          <div class="assist-details-wrap">
            <div><div class="assist-details-header">Size</div><div class="assist-details-value" data-bind="text: humansize"></div></div>
            <!-- ko with: stats -->
            <div><div class="assist-details-header">User</div><div class="assist-details-value" data-bind="text: user"></div></div>
            <div><div class="assist-details-header">Group</div><div class="assist-details-value" data-bind="text: group"></div></div>
            <!-- /ko -->
            <div><div class="assist-details-header">Permissions</div><div class="assist-details-value" data-bind="text: rwx"></div></div>
            <div><div class="assist-details-header">Date</div><div class="assist-details-value" data-bind="text: mtime"></div></div>
          </div>
          <!-- /ko -->
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-join">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular join</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Popularity ' + details.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.relativePopularity + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-join-condition">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular join condition</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Popularity ' + details.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.relativePopularity + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-agg-udf">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-superscript"></i> Popular aggregate - <span data-bind="text: details.aggregateFunction"></span></div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Popularity ' + details.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.relativePopularity + '%' }"></div>
            </div>
          </div>
          <div class="details-comment" data-bind="text: details.function.description"></div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-value">
    <!-- ko if: value.length > 31 -->
    <div class="autocompleter-details">
      <div class="autocompleter-header">Value</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" style="word-wrap: break-word; white-space: normal" data-bind="text: value">
        </div>
      </div>
    </div>
    <!-- /ko -->
  </script>

  <script type="text/html" id="autocomplete-details-identifier">
  </script>

  <script type="text/html" id="autocomplete-details-cte">
  </script>

  <script type="text/html" id="autocomplete-details-group-by">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular group by</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Workload percent ' + details.workloadPercent + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.workloadPercent + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-catalog-details-group-by">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular group by</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" data-bind="component: { name: 'dataCatalogMiniContext', params: { catalogEntry: details, showTitle: true } }"></div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-order-by">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular order by</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Workload percent ' + details.workloadPercent + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.workloadPercent + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-catalog-details-order-by">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular order by</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner" data-bind="component: { name: 'dataCatalogMiniContext', params: { catalogEntry: details, showTitle: true } }"></div>
      </div>
    </div>
  </script>

  <script type="text/html" id="autocomplete-details-filter">
    <div class="autocompleter-details">
      <div class="autocompleter-header"><i class="fa fa-fw fa-star-o"></i> Popular filter</div>
      <div class="autocompleter-details-contents">
        <div class="autocompleter-details-contents-inner">
          <div class="details-code" data-bind="text: value"></div>
          <div class="details-popularity margin-top-10" data-bind="tooltip: { title: 'Popularity ' + details.relativePopularity + '%', placement: 'bottom' }"><i class="fa fa-fw fa-star-o popular-color"></i>
            <div class="progress">
              <div class="bar" data-bind="style: { 'width': details.relativePopularity + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </script>


  <script type="text/javascript">
    (function () {

      var aceUtil = ace.require('ace/autocomplete/util');
      var HashHandler = ace.require('ace/keyboard/hash_handler').HashHandler;

      ko.bindingHandlers.matchedText = {
        init: function (element, valueAccessor) {
          var options = valueAccessor();
          var $element = $(element);

          var refresh = function () {
            $element.empty();
            var suggestion = options.suggestion;
            var value = options.isComment ? suggestion.details.comment : suggestion.value;

            if (options.filter() && suggestion.matchIndex > -1 && ((!options.isComment && !suggestion.matchComment) || (options.isComment && suggestion.matchComment))) {
              var before = value.substring(0, suggestion.matchIndex);
              var match = value.substring(suggestion.matchIndex, suggestion.matchIndex + suggestion.matchLength);
              var after = value.substring(suggestion.matchIndex + suggestion.matchLength);
              $element.append(document.createTextNode(before));
              $('<b>').text(match).appendTo($element);
              $element.append(document.createTextNode(after));
            } else {
              $element.text(value);
            }
          };

          refresh();

          // matchIndex and matchLength are not observable, hence the pubsub to update
          var updatePubSub = huePubSub.subscribe('hue.ace.autocompleter.match.updated', refresh);
          ko.utils.domNodeDisposal.addDisposeCallback(element, updatePubSub.remove)
        }
      };

      function HueAceAutocompleter (params, element) {
        var self = this;
        self.disposeFunctions = [];
        self.editor = params.editor;
        self.snippet = params.snippet || {};
        self.foreachVisible = ko.observable();

        self.autocompleter = params.autocompleter || new SqlAutocompleter(params);
        self.suggestions = self.autocompleter.suggestions;

        self.active = ko.observable(false).extend({ rateLimit: 10 }); // to prevent flickering on empty result
        self.top = ko.observable(1);
        self.left = ko.observable(1);

        self.selectedIndex = ko.observable(0);
        self.hoveredIndex = ko.observable(null);

        self.focusedEntry = ko.pureComputed(function () {
          if (self.suggestions.filtered().length > 0) {
            return self.suggestions.filtered()[self.hoveredIndex() || self.selectedIndex()];
          }
          return null;
        });

        self.suggestions.filtered.subscribe(function (newValue) {
          if (self.selectedIndex() > newValue.length - 1) {
            self.selectedIndex(Math.max(0, newValue.length -1));
          }
        });

        self.keyboardHandler = new HashHandler();
        self.keyboardHandler.bindKeys({
          'Up': function(editor, evt) {
            if (self.suggestions.filtered().length <= 1) {
              self.detach();
              self.editor().execCommand('golineup');
            } else if (self.selectedIndex() > 0) {
              self.selectedIndex(self.selectedIndex() - 1);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            } else {
              self.selectedIndex(self.suggestions.filtered().length - 1);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            }
          },
          'Down': function(editor) {
            if (self.suggestions.filtered().length <= 1) {
              self.detach();
              self.editor().execCommand('golinedown');
            } else if (self.selectedIndex() < self.suggestions.filtered().length - 1) {
              self.selectedIndex(self.selectedIndex() + 1);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            } else {
              self.selectedIndex(0);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            }
          },
          'Ctrl-Up|Ctrl-Home': function() {
            if (self.suggestions.filtered().length <= 1) {
              self.detach();
              self.editor().execCommand('gotostart');
            } else {
              self.selectedIndex(0);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            }
          },
          'Ctrl-Down|Ctrl-End': function() {
            if (self.suggestions.filtered().length <= 1) {
              self.detach();
              self.editor().execCommand('gotoend');
            } else if (self.suggestions.filtered().length > 0 ) {
              self.selectedIndex(self.suggestions.filtered().length - 1);
              self.hoveredIndex(null);
              self.scrollSelectionIntoView();
            }
          },
          'Esc': function() {
            self.detach();
          },
          'Return': function() {
            self.insertSuggestion(function () {
              self.editor().execCommand('insertstring', '\n');
            });
          },
          'Shift-Return': function() {
            // TODO: Delete suffix
            self.insertSuggestion();
          },
          'Tab': function() {
            self.insertSuggestion(function () {
              self.editor().execCommand('indent');
            });
          }
        });

        var changeTimeout = -1;

        self.changeListener = function () {
          window.clearTimeout(changeTimeout);
          var cursor = self.editor().selection.lead;
          if (cursor.row !== self.base.row || cursor.column < self.base.column) {
            self.detach();
          } else {
            changeTimeout = window.setTimeout(function () {
              var pos = self.editor().getCursorPosition();
              if (self.active() && self.autocompleter.onPartial) {
                self.autocompleter.onPartial(aceUtil.retrievePrecedingIdentifier(self.editor().session.getLine(pos.row), pos.column));
              }
              self.suggestions.filter(self.editor().session.getTextRange({ start: self.base, end: pos }));
              if (self.suggestions.filtered().length === 0) {
                self.detach();
              }
            }, 200);
          }
        };

        self.mousedownListener = function () {
          self.detach();
        };

        self.mousewheelListener = function () {
          self.detach();
        };

        var closeOnClickOutside = function (event) {
          if ($.contains(document, event.target) && !$.contains(element, event.target)) {
            self.detach();
          }
        };

        var positionInterval = -1;

        var disposeEventHanders = function () {
          window.clearTimeout(changeTimeout);
          window.clearInterval(positionInterval);
          $(document).off('click', closeOnClickOutside);
          self.editor().keyBinding.removeKeyboardHandler(self.keyboardHandler);
          self.editor().off('changeSelection', self.changeListener);
          self.editor().off('mousedown', self.mousedownListener);
          self.editor().off('mousewheel', self.mousewheelListener);
        };

        self.detach = function () {
          self.suggestions.cancelRequests();
          disposeEventHanders();
          if (!self.active()) {
            return;
          }
          self.active(false);
          self.base.detach();
          self.base = null;
        };

        self.attach = function () {
          disposeEventHanders();
          $(document).on('click', closeOnClickOutside);
          self.editor().keyBinding.addKeyboardHandler(self.keyboardHandler);
          self.editor().on('changeSelection', self.changeListener);
          self.editor().on('mousedown', self.mousedownListener);
          self.editor().on('mousewheel', self.mousewheelListener);
          var $container = $(self.editor().container);
          var initialOffset = $container.offset();
          var initialDevicePixelRation = window.devicePixelRatio; // Detect zoom changes
          positionInterval = window.setInterval(function () {
            var newOffset = $container.offset();
            if (initialDevicePixelRation !== window.devicePixelRatio) {
              initialOffset = newOffset;
              initialDevicePixelRation = window.devicePixelRatio;
            } else if (Math.abs(newOffset.top - initialOffset.top) > 20 || Math.abs(newOffset.left - initialOffset.left) > 20) {
              self.detach();
            }
          }, 300);
        };

        var autocompleterDoneSub = huePubSub.subscribe('hue.ace.autocompleter.done', function () {
          window.setTimeout(function () {
            if (self.active() && self.suggestions.filtered().length === 0 && !self.suggestions.loading()) {
              self.detach();
            }
          }, 0);
        });

        self.disposeFunctions.push(function () {
          autocompleterDoneSub.remove();
        });

        var autocompleterShowSub = huePubSub.subscribe('hue.ace.autocompleter.show', function (data) {
          if (data.editor !== self.editor()) {
            return;
          }
          var session = self.editor().getSession();
          var pos = self.editor().getCursorPosition();
          var line = session.getLine(pos.row);
          var prefix = aceUtil.retrievePrecedingIdentifier(line, pos.column);
          var newBase = session.doc.createAnchor(pos.row, pos.column - prefix.length);
          self.top(data.position.top + data.lineHeight + 3);
          self.left(data.position.left);
          var newAutocomp = false;
          if (!self.active() || (!self.base || newBase.column !== self.base.column || newBase.row !== self.base.row)) {
            self.autocompleter.autocomplete();
            newAutocomp = true;
          }
          newBase.$insertRight = true;
          self.base = newBase;
          self.suggestions.filter(prefix);
          self.active(true);
          self.selectedIndex(0);
          if (newAutocomp) {
            self.attach();
          }
        });

        self.disposeFunctions.push(function () {
          autocompleterShowSub.remove();
        });

        var autocompleterHideSub = huePubSub.subscribe('hue.ace.autocompleter.hide', function () {
          self.detach();
        });

        self.disposeFunctions.push(function () {
          autocompleterHideSub.remove();
        });
      }

      HueAceAutocompleter.prototype.dispose = function () {
        var self = this;
        self.disposeFunctions.forEach(function (disposeFunction) {
          disposeFunction();
        });
        self.detach();
      };

      HueAceAutocompleter.prototype.insertSuggestion = function (emptyCallback) {
        var self = this;
        if (self.suggestions.filtered().length === 0) {
          self.detach();
          if (emptyCallback) {
            emptyCallback();
          }
          return;
        }
        var selectedSuggestion = self.suggestions.filtered()[self.selectedIndex()];
        var valueToInsert = selectedSuggestion.value;
        if (selectedSuggestion.popular() && selectedSuggestion.category) {
          hueAnalytics.convert('editor', 'popularAutocomplete/' + self.suggestions.filtered()[self.selectedIndex()].category.id)
        }
        // Not always the case as we also match in comments
        if (valueToInsert.toLowerCase() === self.suggestions.filter().toLowerCase()) {
          // Close the autocompleter when the user has typed a complete suggestion
          self.detach();
          return;
        }
        if (self.suggestions.filter()) {
          var ranges = self.editor().selection.getAllRanges();
          for (var i = 0, range; range = ranges[i]; i++) {
            range.start.column -= self.suggestions.filter().length;
            self.editor().session.remove(range);
          }
        }
        // TODO: Only replace when editing identifiers (using parse locations)
        // TODO: Move cursor handling for '? FROM tbl' here
        self.editor().execCommand('insertstring', valueToInsert);
        self.editor().renderer.scrollCursorIntoView();
        self.detach();
      };

      HueAceAutocompleter.prototype.scrollSelectionIntoView = function () {
        var self = this;
        if (self.foreachVisible()) {
          self.foreachVisible().scrollToIndex(self.selectedIndex());
        }
      };

      ko.components.register('hueAceAutocompleter', {
        viewModel: { createViewModel: function (params, componentInfo) {
          return new HueAceAutocompleter(params, componentInfo.element);
        }},
        template: { element: 'hue-ace-autocompleter' }
      });
    })();
  </script>

  <script type="text/html" id="data-catalog-mini-context">
    <!-- ko if: catalogEntry.isColumn() -->
    <!-- ko ifnot: showTitle -->
    <div class="details-attribute" ><i class="fa fa-table fa-fw"></i> <span data-bind="text: catalogEntry.path[0]"></span>.<span data-bind="text: catalogEntry.path[1]"></span></div>
    <!-- /ko -->
    <!-- ko if: showTitle -->
    <div class="details-attribute" ><i class="fa fa-columns fa-fw"></i> <span data-bind="text: catalogEntry.getTitle()"></span></div>
    <!-- /ko -->
    <!-- ko if: catalogEntry.isPartitionKey() -->
    <div class="details-attribute" ><i class="fa fa-key fa-fw"></i> Partition key</div>
    <!-- /ko -->
    <!-- ko if: catalogEntry.isPrimaryKey() -->
    <div class="details-attribute" ><i class="fa fa-key fa-fw"></i> Primary key</div>
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: loading -->
    <div class="details-comment" ><!-- ko hueSpinner: { spin: loading, size: 'small', inline: true } --><!-- /ko --></div>
    <!-- /ko -->
    <!-- ko ifnot: loading -->
    <!-- ko if: comment() -->
    <div class="details-comment" data-bind="text: comment"></div>
    <!-- /ko -->
    <!-- ko ifnot: comment() -->
    <div class="details-no-comment">
      No description
    </div>
    <!-- /ko -->
    <!-- /ko -->
  </script>

  <script type="text/javascript">
    (function () {

      var COMMENT_LOAD_DELAY = 1500;

      function DataCatalogMiniContext (params) {
        var self = this;
        self.catalogEntry = params.catalogEntry;
        self.filter = params.filter;
        self.comment = ko.observable();
        self.popularity = ko.observable();
        self.showTitle = !!params.showTitle;
        self.loading = ko.observable(false);

        self.loadTimeout = -1;
        self.activePromises = [];

        if (self.catalogEntry.hasResolvedComment()) {
          self.comment(self.catalogEntry.getResolvedComment());
        } else {
          self.loading(true);
          self.loadTimeout = window.setTimeout(function () {
            self.activePromises.push(self.catalogEntry.getComment({ silenceErrors: true, cancellable: true }).done(self.comment).always(function () {
              self.loading(false);
            }));
          }, COMMENT_LOAD_DELAY);
        }

        if (self.catalogEntry.navOptPopularity && self.catalogEntry.navOptPopularity.relativePopularity) {
          self.popularity(self.catalogEntry.navOptPopularity.relativePopularity);
        }
      }

      DataCatalogMiniContext.prototype.dispose = function () {
        var self = this;
        window.clearTimeout(self.loadTimeout);
        while (self.activePromises.length) {
          var promise = self.activePromises.pop();
          if (promise.cancel) {
            promise.cancel();
          }
        }
      };

      ko.components.register('dataCatalogMiniContext', {
        viewModel: DataCatalogMiniContext,
        template: { element: 'data-catalog-mini-context' }
      });
    })();
  </script>


  
  <script type="text/javascript">
    Dropzone.autoDiscover = false;
    moment.locale(window.navigator.userLanguage || window.navigator.language);
    localeFormat = function (time) {
      var mTime = time;
      if (typeof ko !== 'undefined' && ko.isObservable(time)) {
        mTime = time();
      }
      try {
        mTime = new Date(mTime);
        if (moment(mTime).isValid()) {
          return moment.utc(mTime).format("L LT");
        }
      }
      catch (e) {
        return mTime;
      }
      return mTime;
    };

    // Catches HTTP 502 errors
    function xhrOnreadystatechange() {
      if (this.readyState === 4 && this.status === 502) {
        $.jHueNotify.error($('<span>').html(this.responseText).text());
      }
      if (this._onreadystatechange) {
        return this._onreadystatechange.apply(this, arguments);
      }
    }

    var xhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (data) {
      // Add CSRF Token to all XHR Requests
      this.setRequestHeader('X-CSRFToken', window.CSRF_TOKEN);

      if (this.onreadystatechange) {
        this._onreadystatechange = this.onreadystatechange;
      }
      this.onreadystatechange = xhrOnreadystatechange;
      return xhrSend.apply(this, arguments);
    };
    XMLHttpRequest.prototype.isAugmented = true;

    $.fn.dataTableExt.sErrMode = "throw";

    var IDLE_SESSION_TIMEOUT = -1;

    $(document).ready(function () {
      // forces IE's ajax calls not to cache
      if ($.browser.msie) {
        $.ajaxSetup({ cache: false });
      }

      // prevents framebusting and clickjacking
      if (self == top){
        $("body").css({
          'display': 'block',
          'visibility': 'visible'
        });
      }
      else {
        top.location = self.location;
      }


      $(".submitter").keydown(function (e) {
        if (e.keyCode == 13) {
          $(this).closest("form").submit();
        }
      }).change(function () {
          $(this).closest("form").submit();
      });

      $(".navbar .nav-tooltip").tooltip({
        delay: 0,
        placement: "bottom"
      });

      $("[rel='tooltip']").tooltip({
        delay: 0,
        placement: "bottom"
      });

      $("[data-rel='navigator-tooltip']").tooltip({
        delay: 0,
        placement: "bottom"
      });

      function openDropdown(which, timeout){
        var _this = which;
        var _timeout = timeout!=null?timeout:800;
        if ($(".navigator").find("ul.dropdown-menu:visible").length > 0) {
          _timeout = 10;
        }
        window.clearTimeout(closeTimeout);
        openTimeout = window.setTimeout(function () {
          $(".navigator li.open").removeClass("open");
          $(".navigator .nav-pills li.dropdown > ul.dropdown-menu").hide();
          $("[data-rel='navigator-tooltip']").tooltip("hide");
          _this.find("ul.dropdown-menu:eq(0)").show();
        }, _timeout);
      }

      var openTimeout, closeTimeout;
      $(".navigator ul.nav li.dropdown").on("click", function(){
        openDropdown($(this), 10);
      });
      $(".navigator ul.nav li.dropdown").hover(function () {
        openDropdown($(this));
      },
      function () {
        window.clearTimeout(openTimeout);
        closeTimeout = window.setTimeout(function () {
          $(".navigator li.open").removeClass("open");
          $(".navigator li a:focus").blur();
          $(".navigator").find("ul.dropdown-menu").hide();
        }, 1000);
      });

      function showSubmenu(menuElement) {
        $(".tooltip").remove();
        menuElement.data("lastShown", (new Date()).getTime())
        menuElement.show();
      }

      $(".navigator ul.nav li.dropdown-submenu a").on("mouseenter", function () {
        showSubmenu($(this).siblings(".dropdown-menu"));
      });

      $(".navigator ul.nav li.dropdown-submenu a img").on("mouseenter", function () {
        showSubmenu($(this).parent().siblings(".dropdown-menu"));
      });

      $(".navigator ul.nav li.dropdown-submenu").on("mouseenter", function () {
        $(this).siblings().find(".dropdown-menu").hide();
        showSubmenu($(this).find(".dropdown-menu"));
      });

      $(".navigator ul.nav li.dropdown-submenu").on("mouseleave", function () {
        var _lastShown = $(this).find(".dropdown-menu").data("lastShown");
        if (_lastShown == null || (new Date()).getTime() - _lastShown > 300) {
          var _el = $(this);
          _el.hideTimeout = window.setTimeout(function () {
            window.clearTimeout(_el.hideTimeout);
            _el.find(".dropdown-menu").hide();
          }, 50);
        }
      });

      if (typeof window.hueDebug === 'undefined') {
        window.hueDebug = {};
      }
      window.hueDebug.viewModel = function (element) {
        if (typeof element !== 'undefined' && typeof element === 'string') {
          element = $(element)[0];
        }
        return ko.dataFor(element || document.body);
      }
    });
  </script>



  <script src="/static/desktop/ext/js/localforage.min.js"></script>
  <script src="/static/desktop/js/clusterConfig.33c018b1eeb2.js"></script>

  <script type="text/javascript">
    $(document).ready(function () {
      localforage.config({
        version: 1.0,
        storeName: 'hue_store',
      });

      huePubSub.subscribe('get.current.app.name', function () {
        var appName = '';
        if ('True' === 'True' && location.href.indexOf('metastore') !== -1) {
          appName = 'metastore';
        } else if (location.href.indexOf('editor') !== -1) {
          appName = 'editor'
        }
        huePubSub.publish('set.current.app.name', appName);
      });

      huePubSub.subscribe('open.link', function (href) {
        location.href = href;
      });
    });
  </script>
</head>

<body>

  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" style="height: 0; margin: 0; border: none; width: 0;">

    <symbol id="hi-empty" viewBox="0 0 640 640">
    </symbol>

    <symbol id="hi-adls" viewBox="0 0 640 640">
      <path d="M542.2,54.52c-13-11.14-31.29-21-54.21-29.26C442.87,9,383.21,0,320,0S197.13,9,152,25.26c-22.93,8.28-41.17,18.12-54.21,29.26C87,63.74,74.13,78.93,74.13,99V541c0,20,12.87,35.24,23.67,44.45,13,11.14,31.29,21,54.21,29.26C197.13,631,256.79,640,320,640s122.87-9,168-25.26c22.93-8.28,41.17-18.12,54.21-29.26,10.8-9.22,23.67-24.41,23.67-44.45V99C565.87,78.93,553,63.74,542.2,54.52ZM106.05,149.81c12.11,8.54,27.51,16.22,46,22.88,45.12,16.29,104.78,25.26,168,25.26s122.87-9,168-25.26c18.44-6.66,33.84-14.33,46-22.88V367.13c-16.11,15.9-38.31,23.74-61.57,21.58-25.4-2.36-48.18-16.14-60.93-36.86l-13.31-21.63-13.72,21.37c-15.57,24.25-40.54,37.93-68.66,37.55-27.52-.38-52.21-14.28-66-37.18L236.49,330l-13.85,21.54c-13.82,21.5-35.36,35.1-59.08,37.3a74.87,74.87,0,0,1-57.51-19.55Zm56.8-94.52C204.58,40.22,260.39,31.92,320,31.92s115.42,8.3,157.15,23.37,56.8,32.48,56.8,43.69-14.92,28.57-56.8,43.69S379.61,166,320,166s-115.42-8.3-157.15-23.37-56.8-32.48-56.8-43.69S121,70.41,162.85,55.29Zm314.3,529.43c-41.73,15.07-97.54,23.37-157.15,23.37s-115.42-8.3-157.15-23.37-56.8-32.48-56.8-43.69V408.24a105.82,105.82,0,0,0,50.58,12.89q4.92,0,9.89-.46c26.43-2.46,50.81-14.7,69.33-34.36C256,408,284.41,420.63,315.32,421.06h1.55a111.11,111.11,0,0,0,80.9-35,113.6,113.6,0,0,0,71.65,34.39,109.43,109.43,0,0,0,64.52-13.64V541C533.95,552.23,519,569.59,477.15,584.71Z"></path>
      <ellipse cx="320" cy="98.97" rx="178.78" ry="47.62"></ellipse>
    </symbol>

    <symbol id="hi-dashboard" viewBox="0 0 640 640">
      <path d="M404.71,252.92c56-63.64,111.37-126.54,170-193-25.83,0-47-.37-68.13.19-14.23.37-25.27-3.56-26.58-19.65-1.12-12.92,9.36-20.4,27.52-20.4,35.19,0,70.38-.19,105.57,0,20.59.19,26.77,6,26.77,26.58.19,36.31-.19,72.81.19,109.13.19,14-5.43,24.33-19.84,24.33s-20.4-9.92-20.22-24.15c.19-19.47,0-38.93,0-63.27-8.61,9.36-14.6,15.54-20.22,22.09-50.54,57.28-100.89,114.74-151.43,171.83-15.91,18-22.84,18.53-41.93,3.37-50.91-40.43-101.64-81-153.49-122.6-4.87,4.31-9.73,8.24-14.41,12.73Q131.14,262.37,43.82,344.45c-4.31,4.12-8.42,8.42-13.29,12-9.55,6.93-21,7.11-26.58-2.81C.21,347.07,2.08,336.4,3.76,328c.94-4.31,7.11-7.67,11-11.42q97.71-92.09,195.42-184c17.41-16.28,22.65-16.47,41.18-1.68l137,109.5C393.66,244.49,398.9,248.42,404.71,252.92Z"></path>
      <rect y="440.45" width="119.71" height="179.57"></rect>
      <rect x="172.66" y="323.04" width="119.71" height="296.98"></rect>
      <rect x="345.32" y="382.9" width="119.71" height="237.12"></rect>
      <rect x="517.99" y="258.58" width="119.71" height="361.44"></rect>
    </symbol>

    <symbol id="hi-documents" viewBox="0 0 640 640">
      <path d="M106.54,602.44A36.4,36.4,0,0,1,71,574.3L1,278.19a36.54,36.54,0,0,1,35.56-44.94h47.5V189a33.29,33.29,0,0,1,33.25-33.25H217.62l22.15-91.63a34.55,34.55,0,0,1,41.57-25.59L492.62,88.43a34.76,34.76,0,0,1,21.77,16l30.48,51.29h58.6A36.58,36.58,0,0,1,640,192.24V564.59a36.3,36.3,0,0,1-10.7,25.84l-1.9,1.9A34.31,34.31,0,0,1,603,602.44Zm476.33-41L530.36,339.24H259a36.41,36.41,0,0,1-35.56-28.13l-8.71-36.84H42.21l67.87,287.16ZM561.14,310.37a36.53,36.53,0,0,1,8.32,16L599,451.31V196.72H569.24l6.22,10.46a34.4,34.4,0,0,1,3.92,25.61Zm-39.27-12.15,9-38.1L449,240.79a34.61,34.61,0,0,1-25.69-41.59l19-80.51L278.15,79.88,239.44,240a36.67,36.67,0,0,1,14.42,21.43l8.71,36.84Zm-323-65,8.83-36.53H125.06v36.53ZM534.71,218.9l-52.86-89-17.12,72.42Z"></path>
    </symbol>

    <symbol id="hi-editor" viewBox="0 0 640 640">
      <path d="M187.83,477.92,0,361.92V283.3L187.83,166.73v86.39L75.91,322.6l111.92,69.49Z"></path>
      <path d="M452.17,166.73,640,282.72v78.62L452.17,477.92V391.53L564.09,322,452.17,252.55Z"></path>
      <path d="M289.12,568H215.41L350.8,72H425Z"></path>
    </symbol>

    <symbol id="hi-file" viewBox="0 0 640 640">
      <path d="M574.3,143.67L445.74,12.32A41.24,41.24,0,0,0,416.44,0H95A41,41,0,0,0,54,41V599a41,41,0,0,0,41,41H545a41,41,0,0,0,41-41V172.35A40.78,40.78,0,0,0,574.3,143.67ZM422.87,34.7L551.43,166a9,9,0,0,1,2.57,6.3V181H413.51a8.19,8.19,0,0,1-8.51-8.51V32h11.44A9.05,9.05,0,0,1,422.87,34.7ZM545,608H95a9,9,0,0,1-9-9V41a9,9,0,0,1,9-9H373V172.49A40.21,40.21,0,0,0,413.51,213H554V599A9,9,0,0,1,545,608Z"></path>
    </symbol>

    <symbol id="hi-file-hive" viewBox="0 0 640 640">
      <path d="M488.17,380.68c10.67-3.25,11-6,14.64-8.84l-9.15,4.45c-14.89,4.7-15.78.51-21.34-1.08C476,379.4,480.38,382.52,488.17,380.68Z"></path>
      <path d="M385.48,415c-4.89,3.48-5.63,6.8-5.52,9.69,8.13-8,7.82-8,19.69-7.94C398.2,416.22,385.48,414.58,385.48,415Z"></path>
      <path d="M347.84,249.46c-15.18-4.87-37.52-3.75-57.72-4.42,17.4,4.43,43.18,4.54,55.74,12.31,0.19,0.68-.32,1.13-1.08,1.5-10.82-2.77-18.51,3.94-23,6.21,12.48-2.54,16,.44,25.46,1.24,10.26,3.92,16.29,22.76,23.06,28.08C364,280.69,360,260.29,347.84,249.46Z"></path>
      <polygon points="458.35 334 451.9 334 459.03 335.87 458.35 334"></polygon>
      <path d="M414.34,327a61.66,61.66,0,0,0-19.63.52c-2.64,3.55-2.83,7.16-4,10.5C398.61,329.32,403.49,328.25,414.34,327Z"></path>
      <path d="M419.74,364.86c2.17-.31-0.58-10.13-1.32-10.35,1.85-.63,3.65-1.1,5.52-1.56-13.9-3.64-21.93-1.49-34,6.26,0,0,9.18-1.34,9-.48-0.67,3.19.8,9.38,1.32,9.87l-5.16,4.21c10.81-5.43,22.19-4.34,33.73-5.17C428.87,367.63,419.15,364.94,419.74,364.86Zm-10.86,1.56a8.91,8.91,0,0,0-6.54,2c-1.17,1.16-2-5.73-1.11-6.81,1.12-1.32,6.32-1.61,7.35.43A8,8,0,0,1,408.88,366.42Z"></path>
      <path d="M574.3,143.67L445.74,12.32A41.24,41.24,0,0,0,416.44,0H95A41,41,0,0,0,54,41V599a41,41,0,0,0,41,41H545a41,41,0,0,0,41-41V172.35A40.78,40.78,0,0,0,574.3,143.67ZM450.6,317.06l7.06-.47c2.12,12.58,11.34,32.87,12.38,34.12,2.4,3.87,0,8.33-.06,12.64,0,1.43-.16,2.8-0.28,4.14l-0.44-1.43-2,1c-0.29-6-6.71-5.54-12.12-5.59l-4.44-1.08c1.35,1.25,5.52,1.15,3.84,3.85-1.42.76-2.07,4-2.88,6.74l-2.4.12c4.24,1.66,8.18,3.11,12.84,5.05l2.35,0.36-2.35,5.9-3.19-1.29-0.11-2.24c-5.62-2.24-16.47-3.19-16.86-2.73-4,3.92-6.92,8.67-10.08,13.23,4.33-3.38,7.61-8.46,13.44-9.87,0.47-.05,6.27,1.08,9.41,1.61-2,.42-5.3.56-5.81,1.27-4.43,5.5-7.7,12.17-11.52,18.29,5.28-5.44,6.89-11,15.84-16.3,0.74-.48,6.2-0.37,8.87,1-0.85,3-2.77,6.64-4.31,10.05-2.19,5.17-6.38,9.95-9.6,14.92,10.07-12.25,7.2-7.75,13.92-15.64,2.82-6.69,8-21,8.41-21.14,0.58,1.87,1.49.47,6.31,0.37,2.41,0,5.23-1.18,7.26-1l0.18,1c6.21-.63,15-8.43,18.52-5,2,2,2.52,7.32,2.47,8.3C504,390,491.7,445,456.72,454.07c-23.25,6-53-15.45-66.73-36.88-0.65,11.08-12.52,24.4-13.41,25.6-1.31,2.06-1.53,4.41,1.23,9a27.13,27.13,0,0,1-6.45-10.34c-2.24-4.68-13.07-19.84-13.07-19.84l-1.27.91c-15.27-15.69-6.58-29.79-1.21-39-12.32-3.11-28.63-9.73-30.88-18.42-3.61-28.13-1.78-37.06,1.84-51.51-16.05,3.38-34.45,7.36-49.55,12.47L277,324.55c-9,2.23-42.15,15.9-58.19,19a39.44,39.44,0,0,1-12.09,0c-5.16-.59-19.31-0.67-25.65-0.83-4.1-4.84-9.18-27.27-13.78-33-2.63-3.3-11.33-12.22-11.33-12.22-15-14.92-24.17-25.78-28.68-40.51-7-22.93,5.4-39.28,15.38-49.58,37.58-1.13,58.67,12.83,85.83,24l1.29-2.55c-8.9-6-41.8-23.76-52.15-25.89a3.4,3.4,0,0,1-1.9-.76c11.62-7.13,17.54-15,23.22-22.73,4.66-6.32,10.3-16.44,23.61-17.61,40.07,6.37,66.94,21.11,88.53,33,2.91,1.62,21.78,11.68,34.44,18.15s27.92,18.25,33.76,26.33c8.59,16.47,20.72,61.43,20.83,61.65l2.69-.88c-0.91-4.21-1.8-9.06-2.07-11.68,7.45,2.93,11.15,2,14.93,1.57-7.29-3.52-15.53-8.79-16.64-12.66-2.47-8.62-9.69-43.89-11.4-45.61-3.83-4.85-25.34-21.33-33.91-25.4,0,0,8.35-9.88,19.69-15.6a28.92,28.92,0,0,1,3.14-1.34,40.1,40.1,0,0,0,33.24,23.57,30.29,30.29,0,0,0,2.22,4.64c7,7.67,9.45,13.09,10.44,15.48,3.38,8.71,6.09,17.41,8.57,26.12-0.83-9.08-3.92-18.8-5.18-27.48-0.47-2.63-5.26-11.19-10.56-18.59h18.15a173.35,173.35,0,0,1,16.2,24.94c2.69,5.27,2.8,8.32,2.45,14.38-0.33,5.71-12,36.74-12,39.61C438.62,303,450.35,316.49,450.6,317.06Zm7.66,55.25h0l0.1-.1a0.31,0.31,0,0,1-.1.1c-0.8.34-5.91,0-6.11-1Zm-50.7,75.45c-4.8,4.51-9.94,7.35-14.85,8.28,0,0-2.34-1.76-2.62-2a19.45,19.45,0,0,0,6.83.27c1.58-.17,3.27-1.57,4.59-3.85,1.46-3.14,2.63-4.46,3.88-5.46Zm-148.2,46.41c-9.39-7.3-16-21.79-20.12-32,23.88,14,60.71,28.63,92.48,28.38,2.65,4.63,6.06,10.08,10.47,16.69C304.4,512.59,272.25,501,259.36,494.17Zm90.39,24.3c0.65,1.88,9.72,11.34,7.56,15.88-2.93,6.15-32.72,4.68-56.6-9.13C316.93,525.05,333.76,525.33,349.75,518.46ZM230.2,424.9c-1.66-12.94-2-26.31.55-39.31,9.67,22.67,47.46,61.49,98.21,68.24-2.62,7.05-3.11,12.72-3.44,18.81C260,458.44,250,440.86,230.2,424.9Zm102.49,19.91c-18.15-9.11-33.38-19.93-48.59-30.87-24.44-17.85-30.94-39.07-35.33-66.54a9,9,0,0,1,2.46-2.53c7.83-5.29,18.86-10,26.19-11.15,5,22,24.62,60.88,41.17,88.75,6.13,7.78,8.27,11.51,16.76,16.1C334.56,440.25,333.62,442.57,332.69,444.81ZM554,599a9,9,0,0,1-9,9H95a9,9,0,0,1-9-9V41a9,9,0,0,1,9-9H373V172.49a41.52,41.52,0,0,0,1.13,9.65,40.43,40.43,0,0,0-9,4c-4,2.46-16.93,14.45-20,16.53-12.2-6.15-19.31-10.84-22.24-13.06-3.72-2.81-32.95-15.16-33.85-15.87-7.95-6.26-46.25-20.75-75.34-19.66L213.29,153c-14.24,8.74-32.22,33.25-41.85,39.81-1.73,1.49-6.82,3.91-13.2,4.28a65.85,65.85,0,0,1-10.61-.09c-5.57-2.84-11.1-1.14-16.47,5.33-5.08,7.32-11.89,21.65-14.87,31.37-5.87,23.71,9.27,43.4,23.13,58,11.76,11.49,19.25,19.27,24.37,30.44,2.28,4.24,10,24.44,10,24.44,1.1,2.2,1.6,2.45,4.62,3.11,18,3.84,38.93,3.1,56.41-2.89,3.38-.86,6.53-1.86,9.6-3-14.81,17.34-23.4,43.32-20.06,79.73,1.23,13.42,9,45.24,22.06,63.73,13.64,19.26,45.17,45.29,89.32,55.21,7,1.11,16.84.41,24.81-1.71,21.37-5.69,64.59-21.68,65-21.82l-0.6-2.77c-0.38,0-38.74,3.18-56.05,1.45-7.38-.17-11.37-2.94-11.55-5.14-1.29-.16-3.95-0.27-3.24-0.44,2.22-.59,4.82-1.49,4.82-1.86v-2.84c0-1.45-8.42-1.45-9.16-3.31-1.62-4-1.16-8.52-3.14-12.47,9.62,0.35,21.53.81,28.54-7.1-2.86.35-11.78,1.46-18.92,0.54-2.69-.35-13.15-4-13.51-4.19-2.75-5.72-5.11-12-5.21-19.25a39.71,39.71,0,0,0,17,10.88l1.23,0.45c3.11,0.07,11.95,4.28,19.4,1.08a74.34,74.34,0,0,0,8.74-.6v-2.77l-9.67,2.29c-13-1.66-22-11.75-24.32-14.86-0.47-.61-7.39-11.09-7.39-11.09,1.45-2.69,2.12-2.75,4.05-2.77,0,0,10.38,1.73,16,.57,2.78,7.55,6,14.76,11.89,18.39,0.35,0.22,25.82,11.08,38.15-10.07,24.47,17.15,53.19,12.74,69.37-.83,26-30,35.45-77.48,32.38-82.64-4.74-8-9.16-12-12.88-11.14-6.18,1.42-17.21,8.16-25,8.84,0.8-9.77,0-15.48-.78-16.9-3-6.59-13-24.57-13.95-27.6-0.59-1.89-2.88-4.17-2.88-6.51,0-1.32,0-3.56,0-3.63,0.05-2.14-10.81-9.38-10.88-10.76,2.15-21.73,12.7-46,13.14-46.78,0.92-1.64,1.78-3.21,1.72-5.07,0.17-3.06-7.51-20.51-18.81-37H554V599Zm0-418H413.51a8.19,8.19,0,0,1-8.51-8.51V32h11.44a9.05,9.05,0,0,1,6.43,2.7L551.43,166a9,9,0,0,1,2.57,6.3V181Z"></path>
    </symbol>

    <symbol id="hi-file-impala" viewBox="0 0 640 640">
      <path d="M272.7,332.16c1,6.57,1.65,18.7,2.15,25.37,15.5-1.71,25.67-12.08,24.69-26.27a91.91,91.91,0,0,0-4.92-24.34c-8.87-24.83-25.23-44.8-43.12-63.65-2.08-2.19-4.47-4.8-5.06-7.57-4.63-21.54-5.64-43.29-4.3-65.34,2.45-40.15,14.59-62.19,32.42-92.35-44.47,44.56-60.63,96.08-55.77,156.9,0.85,10.64,2.79,18.31,5.43,21C248.32,280.06,268.3,304,272.7,332.16Z"></path>
      <path d="M259,403.37c5.19,1.76,7.22-.26,10.09,2.84,2.61,2.82,1.08,12.24,8.23,13.71,5.11,1.05,8.33-1,10.09,3.43,3.43,8.68,11,28.68,14.5,37.32,1.64-.29-4.63-37.4-12-51.46C284.94,396.51,268.85,395.93,259,403.37Z"></path>
      <path d="M219.63,303.94c0,24.69,18.83,45.38,38,57.6C248.21,342.72,238.34,319.12,219.63,303.94Z"></path>
      <path d="M574.24,143.67L445.65,12.32A41.31,41.31,0,0,0,416.32,0H94.88A41,41,0,0,0,54,41V599a41,41,0,0,0,40.88,41h450A41.15,41.15,0,0,0,586,599V172.35A40.83,40.83,0,0,0,574.24,143.67ZM554,599a9.11,9.11,0,0,1-9.12,9h-450A8.91,8.91,0,0,1,86,599V41a8.91,8.91,0,0,1,8.88-9H373V91.23A165.33,165.33,0,0,0,360.58,78.1c4.72,7.55,8.84,14.83,12.42,21.9v72.49a40.21,40.21,0,0,0,20.05,35.12c-0.09,1-.17,1.93-0.27,2.9-1.52,15.33-3.38,28.09-5.42,30-18.72,14.76-35.12,39.83-43.94,56.21-12.29,21.69-12.93,47.4,1.93,68.88,2,3,3.64,6.33,5.49,9.48,5.31,9,7.32,22.28-1.58,35-18.34,26.22-19.94,49.75-15.11,80.83,1,6.36.93,10.75,1.83,15.41,0.27,1.38-1.39,2.15-4.57,5.22-3.71,3.58-6.92,12-13.57,5-3-3.57-10.63-10.43-11.9-9.67-0.9,9.19,4.42,11,9.71,13.77,5.6,2.89,8.65,7.62,7.36,14.13-1.17,5.93-5.77,6.72-10.84,6.47-0.83,0-7.13-1.46-6.32,0,5.29,2.17,10,4.83,16.82,5.62,1.27,5.41,2.75,8.65-.15,15.21,14-4.51,22.65-11.82,27.58-23.66,14.45-32.32,19.49-77.77,21.35-112.63,0.36-6.8,5-6.32,6.66-10.1,1.41-3.19,1.21-8.92,5.11-10.12,3.57-1.1,2.53-.85,7.1-3.53-15.44-10.72-16.39-21.26-3.07-35.49,2.49-2.66,5-5.64,8.1-7.31,21.71-11.65,30.12-49,25.46-75.77-12.15,16.26-18,26.83-26.21,37.2a273.67,273.67,0,0,1-22.23,24.68c-2.09,2.11-6.95,3.19-9.74,2.28-1.89-.61-3.83-5.83-3.26-8.44,2.1-9.58,4.07-19.47,8.21-28.25,9.6-20.35,25.06-36.38,41.14-51.81,2.43-2.33,3.87-2.5,4.55-5.75A199.36,199.36,0,0,0,417.42,213H554V599Zm0-418H413.39a8.1,8.1,0,0,1-8.39-8.51V32h11.32a9.05,9.05,0,0,1,6.43,2.7L551.37,166a9,9,0,0,1,2.63,6.3V181Z"></path>
    </symbol>

    <symbol id="hi-file-job-designer" viewBox="0 0 640 640">
      <path d="M556.4,150.5L427.9,18.8C420.3,10.9,409.7,6,398.7,6H77.3C54.7,6,36,25.3,36,47.9v558C36,628.5,54.7,646,77.3,646h450c22.6,0,40.7-17.5,40.7-40.1V179.2A40.6,40.6,0,0,0,556.4,150.5ZM405.2,41.1L533.6,172.7a9.3,9.3,0,0,1,2.4,6.5V187H395.8c-5,0-8.8-2.7-8.8-7.6V38h11.7A9.5,9.5,0,0,1,405.2,41.1ZM527.3,614H77.3c-5,0-9.3-3.2-9.3-8.1V47.9c0-5,4.3-9.9,9.3-9.9H355V179.4c0,22.6,18.2,39.6,40.8,39.6H536V605.9C536,610.8,532.2,614,527.3,614Z"></path>
      <path d="M455,249.5L443.5,261A180.2,180.2,0,0,0,190,514.5L178.5,526a5,5,0,0,0,0,7.1l26.6,26.6a5,5,0,0,0,7.1,0L488.7,283.2a5,5,0,0,0,0-7.1l-26.6-26.6A5,5,0,0,0,455,249.5ZM184,453.2l28.2-7.6a5,5,0,0,0,3.6-6.2l-3.9-14.6a5,5,0,0,0-6.2-3.6l-28.2,7.5a157,157,0,0,1,0-55.6l28.2,7.5a5,5,0,0,0,6.2-3.6l3.9-14.6a5,5,0,0,0-3.6-6.2L184,348.8a153.8,153.8,0,0,1,27.7-47.9l20.7,20.7a5,5,0,0,0,7.1,0l10.7-10.7a5,5,0,0,0,0-7.1L229.5,283A153.8,153.8,0,0,1,277.8,255l7.6,28.2a5,5,0,0,0,6.2,3.6l14.6-3.9a5,5,0,0,0,3.6-6.2l-7.5-28.2a157,157,0,0,1,55.6,0l-7.5,28.2a5,5,0,0,0,3.6,6.2l14.6,3.9a5,5,0,0,0,6.2-3.6l7.6-28.2a153.6,153.6,0,0,1,43.4,24L208,496.5A153.6,153.6,0,0,1,184,453.2Z"></path>
    </symbol>

    <symbol id="hi-file-notebook" viewBox="0 0 640 640">
      <path d="M574.3,143.7L445.7,12.3A41.2,41.2,0,0,0,416.4,0H95A41,41,0,0,0,54,41V599a41,41,0,0,0,41,41H545a41,41,0,0,0,41-41V172.3A40.8,40.8,0,0,0,574.3,143.7ZM422.9,34.7L551.4,166a8.9,8.9,0,0,1,2.6,6.3V181H413.5a8.2,8.2,0,0,1-8.5-8.5V32h11.4A9.1,9.1,0,0,1,422.9,34.7ZM545,608H95a9,9,0,0,1-9-9V41a9,9,0,0,1,9-9H373V172.5A40.2,40.2,0,0,0,413.5,213H554V599A9,9,0,0,1,545,608Z"></path>
      <rect x="153" y="247" width="328" height="34" rx="4" ry="4"></rect>
      <rect x="153" y="328" width="328" height="34" rx="4" ry="4"></rect>
      <rect x="153" y="409" width="328" height="34" rx="4" ry="4"></rect>
      <rect x="153" y="490" width="328" height="34" rx="4" ry="4"></rect>
    </symbol>

    <symbol id="hi-file-oozie-bundle" viewBox="0 0 640 640">
      <path d="M574.5,144.1L446,12.5A41.3,41.3,0,0,0,416.8,0H95.3C72.7,0,54,18.8,54,41.4v558C54,622,72.7,640,95.3,640h450A40.4,40.4,0,0,0,586,599.4V172.8A40.6,40.6,0,0,0,574.5,144.1ZM423.2,34.9L551.6,166.4a9.1,9.1,0,0,1,2.4,6.4V181H413.9c-5,0-8.9-3.1-8.9-8.1V32h11.8A9.3,9.3,0,0,1,423.2,34.9ZM545.3,608H95.3c-5,0-9.3-3.6-9.3-8.6V41.4A9.7,9.7,0,0,1,95.3,32H373V172.9c0,22.6,18.2,40.1,40.9,40.1H554V599.4A8.4,8.4,0,0,1,545.3,608Z"></path>
      <path d="M320,546.8c-92.8,0-168.3-75.5-168.3-168.3S227.2,210.1,320,210.1s168.3,75.5,168.3,168.3S412.8,546.8,320,546.8Zm0-304.6c-75.2,0-136.3,61.2-136.3,136.3S244.8,514.8,320,514.8s136.3-61.2,136.3-136.3S395.2,242.1,320,242.1Z"></path>
      <path d="M265.9,286.5h28.3c-0.2-.4,0,65.5,0,65.5s12.6-20.1,38.7-20.1c44.2,0,60,36,60,68.2,0,39.4-21,67-55.3,67S292.6,446,292.6,446v17.6H265.9V286.5Zm98.7,113.1c0-32.1-18.8-45.4-35.5-45.4-32.4,0-36,31.7-36,45.4,0,23.9,11.4,45.1,36,45.1C363.3,444.8,364.6,405.2,364.6,399.6Z"></path>
    </symbol>

    <symbol id="hi-file-oozie-coordinator" viewBox="0 0 640 640">
      <path d="M574.5,143.7L446,12.3A41,41,0,0,0,416.8,0H95.3C72.7,0,54,18.4,54,41V599c0,22.6,18.7,41,41.3,41h450A40.8,40.8,0,0,0,586,599V172.3A40.6,40.6,0,0,0,574.5,143.7ZM423.2,34.7L551.6,166a8.8,8.8,0,0,1,2.4,6.3V181H413.9c-5,0-8.9-3.5-8.9-8.5V32h11.8A9.1,9.1,0,0,1,423.2,34.7ZM545.3,608H95.3a9.3,9.3,0,0,1-9.3-9V41a9.3,9.3,0,0,1,9.3-9H373V172.5A40.5,40.5,0,0,0,413.9,213H554V599A8.7,8.7,0,0,1,545.3,608Z"></path>
      <path d="M320,546.3c-92.8,0-168.3-75.5-168.3-168.3S227.2,209.7,320,209.7,488.3,285.2,488.3,378,412.8,546.3,320,546.3Zm0-304.6c-75.2,0-136.3,61.2-136.3,136.3S244.8,514.3,320,514.3,456.3,453.2,456.3,378,395.2,241.7,320,241.7Z"></path>
      <path d="M352.5,359.8c-1.2-7.9-6.6-24.1-29.3-24.1-25.1,0-35.2,20.6-35.2,46.6,0,5.3,1.3,43.9,34,43.9,23.3,0,29.2-20,30.5-29.3h28.3c-2.9,22.9-18,51.6-58.8,51.6-45.5,0-62.2-35-62.2-66.2s14.7-68.9,63.2-68.9c43,0,57.8,29.4,57.8,46.4H352.5Z"></path>
    </symbol>

    <symbol id="hi-file-oozie-workflow" viewBox="0 0 640 640">
      <path d="M574.5,143.7L446,12.3A41,41,0,0,0,416.8,0H95.3C72.7,0,54,18.4,54,41V599c0,22.6,18.7,41,41.3,41h450A40.8,40.8,0,0,0,586,599V172.3A40.6,40.6,0,0,0,574.5,143.7ZM423.2,34.7L551.6,166a8.8,8.8,0,0,1,2.4,6.3V181H413.9c-5,0-8.9-3.5-8.9-8.5V32h11.8A9.1,9.1,0,0,1,423.2,34.7ZM545.3,608H95.3a9.3,9.3,0,0,1-9.3-9V41a9.3,9.3,0,0,1,9.3-9H373V172.5A40.5,40.5,0,0,0,413.9,213H554V599A8.7,8.7,0,0,1,545.3,608Z"></path>
      <path d="M320,546.3c-92.8,0-168.3-75.5-168.3-168.3S227.2,209.7,320,209.7,488.3,285.2,488.3,378,412.8,546.3,320,546.3Zm0-304.6c-75.2,0-136.3,61.2-136.3,136.3S244.8,514.3,320,514.3,456.3,453.2,456.3,378,395.2,241.7,320,241.7Z"></path>
      <path d="M226.8,320.9h30l25,95.7h0.5l24.1-95.7h28.5l23.1,95.7h0.5l26-95.7h28.8L373.1,449.2h-29l-23.8-95.2h-0.5l-23.6,95.2H266.4Z"></path>
    </symbol>

    <symbol id="hi-file-pig" viewBox="0 0 640 640">
      <path d="M574.3,143.7L445.7,12.3A41.2,41.2,0,0,0,416.4,0H95A41,41,0,0,0,54,41V599a41,41,0,0,0,41,41H545a41,41,0,0,0,41-41V172.3A40.8,40.8,0,0,0,574.3,143.7Zm-347.5,170a20.8,20.8,0,0,0,28.1-22.8l-7.8-46.3a185,185,0,0,1,145.7,0l-7.8,46.3a20.8,20.8,0,0,0,28.1,22.8l45.6-18c18.2,24,28.8,52.9,28.8,84,0,82.8-75.2,150.1-167.5,150.1S152.5,462.5,152.5,379.7c0-31.1,10.6-60,28.8-84Zm-80-58.7,66.3-60.3,15.5,92.6Zm264.5,32.2L423.8,213h23.3l46.1,41.9ZM554,599a9,9,0,0,1-9,9H95a9,9,0,0,1-9-9V41a9,9,0,0,1,9-9H373V172.5a40.2,40.2,0,0,0,25.6,37.7l-1.4,8.6a211.9,211.9,0,0,0-154.3,0l-6.1-36.6a20.8,20.8,0,0,0-34.5-11.9l-77.8,70.8a20.8,20.8,0,0,0,6.4,34.7l26.1,10.3A170.2,170.2,0,0,0,142.5,311a161.4,161.4,0,0,0,0,137.4,174.9,174.9,0,0,0,41.6,55.7c36.4,32.8,84.6,50.9,135.9,50.9s99.5-18.1,135.9-50.9a174.9,174.9,0,0,0,41.6-55.7,161.4,161.4,0,0,0,0-137.4,170.2,170.2,0,0,0-14.4-24.9l26.1-10.3a20.8,20.8,0,0,0,6.4-34.7L484.7,213H554V599Zm0-418H413.5a8.2,8.2,0,0,1-8.5-8.5V32h11.4a9.1,9.1,0,0,1,6.4,2.7L551.4,166a8.9,8.9,0,0,1,2.6,6.3V181Z"></path>
      <path d="M247.7,379.4a18.1,18.1,0,1,0-18.1-18.1A18.1,18.1,0,0,0,247.7,379.4Z"></path>
      <path d="M392.3,379.4a18.1,18.1,0,1,0-18.1-18.1A18.1,18.1,0,0,0,392.3,379.4Z"></path>
      <path d="M251.6,479.5c18.4,11.1,42.7,17.1,68.4,17.1s50-6.1,68.4-17.1,30.8-28.2,30.8-45.9-10.9-34-30.8-45.9-42.7-17.1-68.4-17.1-50,6.1-68.4,17.1-30.8,28.2-30.8,45.9S231.7,467.6,251.6,479.5ZM320,388.3c44.1,0,81.4,20.7,81.4,45.3s-37.3,45.3-81.4,45.3-81.4-20.7-81.4-45.3S275.9,388.3,320,388.3Z"></path>
      <path d="M292.9,451.7c5,0,9-8.1,9-18.1s-4-18.1-9-18.1-9,8.1-9,18.1S287.9,451.7,292.9,451.7Z"></path>
      <path d="M347.1,451.7c5,0,9-8.1,9-18.1s-4-18.1-9-18.1-9,8.1-9,18.1S342.1,451.7,347.1,451.7Z"></path>
    </symbol>

    <symbol id="hi-file-search" viewBox="0 0 640 640">
      <path d="M574.3,143.7L445.7,12.3A41.2,41.2,0,0,0,416.4,0H95A41,41,0,0,0,54,41V599a41,41,0,0,0,41,41H545a41,41,0,0,0,41-41V172.3A40.8,40.8,0,0,0,574.3,143.7ZM422.9,34.7L551.4,166a8.9,8.9,0,0,1,2.6,6.3V181H413.5a8.2,8.2,0,0,1-8.5-8.5V32h11.4A9.1,9.1,0,0,1,422.9,34.7ZM545,608H95a9,9,0,0,1-9-9V41a9,9,0,0,1,9-9H373V172.5A40.2,40.2,0,0,0,413.5,213H554V599A9,9,0,0,1,545,608Z"></path>
      <path d="M470.2,480l-56.3-56.3a134,134,0,0,0,25.7-82.1c-1.6-71.8-59.9-130.2-131.7-131.7-76.7-1.7-139.4,61-137.7,137.7,1.6,72,60.3,130.4,132.3,131.7a134,134,0,0,0,82.5-26.5l56.2,56.2a13.7,13.7,0,0,0,19.3,0l9.7-9.7A13.7,13.7,0,0,0,470.2,480ZM305,448.3A103.8,103.8,0,1,1,408.7,344.5,103.9,103.9,0,0,1,305,448.3Z"></path>
    </symbol>

    <symbol id="hi-folder" viewBox="0 0 640 640">
      <path d="M599,586H41A41,41,0,0,1,0,545V95A41,41,0,0,1,41,54H246a41,41,0,0,1,41,41v58l312,0a41,41,0,0,1,41,41V545A41,41,0,0,1,599,586ZM41,86a9,9,0,0,0-9,9V545a9,9,0,0,0,9,9H599a9,9,0,0,0,9-9V194a9,9,0,0,0-9-9H287a32,32,0,0,1-32-32V95a9,9,0,0,0-9-9H41Z"></path>
    </symbol>

    <symbol id="hi-hbase" viewBox="0 0 640 640">
      <path d="M367,368.67c-16.45.34-32.91.1-49.36.1v.65c-15.55,0-31.11,0-46.66,0-16.52-.07-29.35,7.31-39.35,19.88-14.42,18.13-25.73,39.07-47.66,50.21-2.42,1.23-4.37,6-4.11,9,.16,1.79,4.77,3.79,7.69,4.64a163.76,163.76,0,0,0,78.94,3.31c37.52-7.56,71.36-22.37,95.73-53.34,5.59-7.1,9.43-15.85,12.75-24.37C377.34,372.69,374.76,368.51,367,368.67ZM58.51,321.38c-3.88-5.34-8.11-11-12.19-16.81-3.21-4.55-6.23-5.58-10.86-1.29C16,321.29,9,366.91,22.14,389.73Zm522.56,9.74c-9.43-1.85-10.34-5.76-14.44-10.84-21.4-26.53-37.3-51.12-65.38-78.58-45.19-47.13-101.35-71.49-166.9-75.12-35.56-2-70.62,1-105.55,6.36-16.8,2.55-27.81-4-35.93-17.47-3.07-5.09-6.34-10.48-7.6-16.16-4.67-21-8.73-42.07-12.61-63.19-1.4-7.64-3.57-9.42-10.67-6.28a40.18,40.18,0,0,0-22.92,26.22c-3,10.23-5.7,21.07-5.54,31.6.37,24.21,2.22,48.42,4.17,72.57,1.09,13.44-.81,25.09-10.12,35.8-10.58,12.18-19.68,25.64-29.51,38.49C62.58,321,33,370.7,13.88,426.17,4.14,454.37-3.34,482.91,1.53,513.26,3.19,523.56,4,534,5.25,544.37c1.47,12.48,18.59,27.47,31.15,27.26,14.42-.24,26.92-6.24,37.83-14.76,19.25-15,40.52-26.36,62.28-37.11,25.92-12.8,49.72-28.77,69.82-49.83,1.48-1.55,2.66-3.39,4.17-5.35-10.25-2.47-19.68-4.3-28.82-7.07-10-3-11.93-10.48-5.22-18.57,2.25-2.71,5.45-4.61,8.1-7,7.7-7,15.9-13.54,22.85-21.22,6.6-7.29,11.64-16,17.77-23.7,11-13.89,25.3-21.72,43.26-22.08,10.78-.21,21.57-.38,32.35-.14,8.52.19,15.33-2.55,22-8,16.41-13.45,30.41-26.92,48-38.74,27.88-15.59,48.79-22.26,75.6-19.57,48.14,4.84,84.07,30.32,113.17,67.22a7.49,7.49,0,0,1,1.78,5.2c-.2,1.95-3,1-3,1S535,347.42,524,336c-6,8.38-9.16,14.13-14.14,20.22-6.79,8.32-15.13,15.55-21,24.45-9.46,14.45-5.43,36,7.36,44.4,1.09-1.67,2.89-3.25,3.14-5,1-6.93,1.55-12.15,9.77-12.69,3.73-.24,1.07-4.59,8.14-5,2.21.17,2,2,4.24,1.87,1.78-.26,2.58-3.33,4.5-4.16,3.82-1.66,8.9-1.45,12.67-1.3,7,.29,10.31-3.38,11.21-7.85.6-2.95.87-5.26,2.32-10.44,3.34,13.34,12,17.36,22.79,17.27,5.09,0,10.33-1.11,15.24-.23,12,.76,14.08,3.45,20.82,6,10.39,3.94,19.83,8.7,23.42,21,1.06-.33,3.14-.59,4.25-2.72s1.08-5,1.17-8.62C641,372.3,620.31,343.33,581.07,331.12ZM158.89,395c9.45-.15,10.87,2,6.9,10.25a17.12,17.12,0,0,0-1.93,5.83c-1.26,15.95-9.1,27.36-22.93,35.25-7,4-13.12,9.51-20.16,13.41-3.86,2.14-9.87,4.42-12.94,2.83-1.65-.85-2.58-3.1-3.36-5.66a29.51,29.51,0,0,1-.69-15.17c5.85-25.08,29.74-46.33,55.12-46.75ZM102,480.32c.1-2.13,9.92-10.58,12.41-10.18s2.34,2.16,2.35,4.71-9.83,11.37-14.57,8.42c-1.11-.95-.47-2.55-.2-3Zm93-8.53c-12.49,11.55-26.42,20.8-40,29.35-10.59,6.67-22.13,11.81-32.88,18.25-16.37,9.8-32.45,20.09-48.62,30.23-12,7.56-23.76,15.95-39.26,15.55.24-1.29.21-2.2.46-2.29C51,557.16,63,546.35,74.14,533.25c6.72-7.91,16.79-13.37,26.11-18.58,19.5-10.89,35.31-25.26,47.35-44.14,8.59-13.47,8.93-12.94,23.17-6.71,7.33,3.2,13.61,4.34,24.18,8ZM424.47,280.64c18.69-.39,27.25,1.78,40.51,4.88,10.5,2.55,17.84,9.57,22.13,15.24-16.72-5.12-25.18-7.87-41.73-9.34-35.57-4.25-66.79,6.86-94.18,29.23-11.58,9.46-23.06,19.18-33.5,29.85-6.17,6.3-6.29,8-21.12,7,13.11-20.29,25.07-40.85,36.78-61.21,37.88-65.85,133.08-54.57,165.8-16.39a38.82,38.82,0,0,1,3.36,5.69s-31-16.56-53.73-16.56c-13.71,0-17.15,1-25.63,2.47-2.24.38-6,2.32-5.95,5.6s4.72,3.15,7.25,3.51ZM624.15,400.4c-9.94-15.39-25-12.06-39-12.12-4.19,0-8.38.22-12.57.37-7.08.26-13-1.4-16.13-8.68-.79-1.87-2.79-4.77-4.44-5.06a3.53,3.53,0,0,0-2.44,2.11c-6.38,13.57-18.76,15.72-31.62,16-7.43.16-13.52,1.19-17.18,8.57-.71,1.43-4.33,3.08-5,2.57-1.59-1.27-3.53-4.16-3-5.61,1.9-5.53,3.91-11.33,7.33-16,8.67-11.76,18.12-22.95,28.06-35.37,4.68,4.94,9.82,10.48,15.11,15.88,4.17,4.27,8.07,9,13,12.26,2.58,1.7,8.17,2,10.3.25,1.84-1.47,2.07-7.37.64-10-2.93-5.45-7.55-10-11.28-15-2.78-3.77-5.26-7.75-8.58-12.68,33.48-6,83.2,34.67,76.85,62.55Z"></path>
    </symbol>

    <symbol id="hi-hive" viewBox="0 0 640 640">
      <path d="M549.2,358.9h0c0.8-.6,2.4-6.1,1.9-7.8-1.1-3.9-8.8-3.1-8.8-3.1-1.9,1.1-3.5,7.2-2.9,9.2"></path>
      <path d="M571.7,363.5c5.9,6.7,12.9,11.7,25.4,8.8,17.1-5.2,17.7-9.5,23.4-14.1l-14.6,7.1C582,372.8,580.6,366.1,571.7,363.5Z"></path>
      <path d="M432.8,427.1c-7.8,5.6-9,10.9-8.8,15.5,13-12.8,12.5-12.8,31.5-12.7C453.1,429.1,432.8,426.5,432.8,427.1Z"></path>
      <path d="M280.2,155.2c27.8,7.1,69.1,7.3,89.2,19.7,0.3,1.1-.5,1.8-1.7,2.4-17.3-4.4-29.6,6.3-36.9,9.9,20-4.1,25.5.7,40.7,2,16.4,6.3,26.1,36.4,36.9,44.9-10-21.9-16.3-54.5-35.9-71.9C348.3,154.5,312.5,156.3,280.2,155.2Z"></path>
      <path d="M467.6,88.8c0.5,2.5,2.4,13.7,7.6,22.3,11.1,12.3,15.1,20.9,16.7,24.8,5.4,13.9,9.7,27.9,13.7,41.8-1.3-14.5-6.3-30.1-8.3-44C496.2,127.4,479.3,99.4,467.6,88.8Z"></path>
      <polygon points="549.4 297 539 297 550.5 300 549.4 297"></polygon>
      <path d="M478.9,286.4c-8.1-1.1-21-1.4-31.4.8-4.2,5.7-4.5,11.5-6.4,16.8C453.8,290.1,461.6,288.4,478.9,286.4Z"></path>
      <path d="M485.5,330.4c3-1,5.8-1.8,8.8-2.5-22.2-5.8-35.1-2.4-54.4,10,0,0,14.7-2.1,14.4-.8-1.1,5.1,1.3,15,2.1,15.8l-8.3,6.7c17.3-8.7,35.5-6.9,54-8.3,0,0-15.5-4.3-14.6-4.4C491.1,346.5,486.7,330.7,485.5,330.4Zm-15.3,19.1c-4.2-.2-7.8.8-10.5,3.2s-3.2-9.2-1.8-10.9,10.1-2.6,11.8.7A12.8,12.8,0,0,1,470.2,349.5Z"></path>
      <path d="M618.5,336.7c-9.9,2.3-27.5,13.1-40,14.1,1.3-15.6-.1-24.8-1.3-27-4.8-10.5-20.8-39.3-22.3-44.2-0.9-3-4.6-6.7-4.6-10.4,0-2.1,0-5.7,0-5.8,0.1-3.4-17.3-15-17.4-17.2,3.4-34.8,20.3-73.6,21-74.9s2.9-5.1,2.8-8.1c0.5-8.9-40.4-93.6-82.1-107.8-7.5-2.5-46.2-11.6-74.4,5.6-6.5,3.9-27.1,23.1-32.1,26.5-19.5-9.8-30.9-17.3-35.6-20.9s-52.7-24.3-54.2-25.4c-12.7-10-74-33.2-120.5-31.5L157.3,8c-22.8,14-51.5,53.2-67,63.7-2.8,2.4-10.9,6.3-21.1,6.8-1.1,0-10.2.7-17-.1-8.9-4.5-17.8-1.8-26.4,8.5s-19,34.6-23.8,50.2c-9.4,37.9,14.8,69.4,37,92.7,18.8,18.4,30.8,30.8,39,48.7,3.6,6.8,16,39.1,16,39.1,1.8,3.5,2.6,3.9,7.4,5,28.8,6.1,62.3,5,90.3-4.6,5.4-1.4,10.4-3,15.4-4.7C183.4,341,169.7,382.6,175,440.9c2,21.5,14.3,72.4,35.3,102s72.3,72.5,142.9,88.3c11.2,1.8,26.9.7,39.7-2.7,34.2-9.1,103.3-34.7,104-34.9l-1-4.4c-0.6.1-62,5.1-89.7,2.3-11.8-.3-18.2-4.7-18.5-8.2-2.1-.3-6.5-0.4-5.4-0.7,3.5-.9,7.5-2.4,7.5-3v-4.5c0-2.3-13.3-2.3-14.5-5.3-2.6-6.4-1.7-13.6-4.9-19.9,15.4,0.6,34.5,1.3,45.7-11.4-4.6.6-18.8,2.3-30.2,0.9-4.3-.6-21-6.4-21.6-6.7-4.4-9.1-8.2-19.3-8.3-30.8,8,8.4,17,14.2,27.2,17.4l2,0.7c5,0.1,18.9,6.8,30.8,1.7a114,114,0,0,0,13.8-1v-4.4l-15.3,3.7c-20.8-2.7-35.1-18.8-38.8-23.8-0.7-1-11.8-17.7-11.8-17.7,2.3-4.3,3.4-4.4,6.5-4.4,0,0,16.6,2.8,25.6.9,4.4,12.1,9.6,23.6,19,29.4,0.6,0.3,41.3,17.7,61-16.1,39.2,27.4,85.1,20.4,111-1.3,41.5-48,56.7-124,51.8-132.2C631.5,341.8,624.5,335.4,618.5,336.7ZM184.3,443c-2.7-20.7-3.1-42.1.9-62.9,15.5,36.3,75.9,98.4,157.1,109.2-4.2,11.3-5,20.3-5.5,30.1C232,496.7,216,468.6,184.3,443ZM214,319c1.3-1.7,2.7-3.5,3.9-4,12.5-8.5,30.2-15.9,41.9-17.8,8,35.1,39.4,97.4,65.9,142,9.8,12.4,13.2,18.4,26.8,25.8-1.3,2.7-2.8,6.4-4.2,10-29-14.6-53.4-31.9-77.7-49.4C231.5,396.9,221.1,363,214,319ZM375.6,592.7c1,3,15.6,18.1,12.1,25.4-4.7,9.8-52.3,7.5-90.6-14.6C323.1,603.3,350,603.7,375.6,592.7Zm-176.8-90c38.2,22.3,97.1,45.8,148,45.4,4.2,7.4,9.7,16.1,16.7,26.7-60.4,8.5-111.9-10-132.5-21C215.9,542.2,205.4,519,198.8,502.7Zm245.5-9.9-4.2-3.1a31.1,31.1,0,0,0,10.9.4c2.5-.3,5.2-2.5,7.3-6.2s4.2-7.1,6.2-8.7l3.5,4.3C460.4,486.8,452.2,491.4,444.3,492.8Zm102.4-3.1c-37.2,9.6-84.8-24.7-106.8-59-1,17.7-20,39-21.5,41s-2.4,7.1,2,14.4c-4.2-4-7.7-9.5-10.3-16.5s-20.9-31.7-20.9-31.7l-2,1.5c-24.4-25.1-10.5-47.7-1.9-62.4-19.7-5-45.8-15.6-49.4-29.5-5.8-45-2.8-59.3,2.9-82.4-25.7,5.4-55.1,11.8-79.3,19.9l-0.4-2.4c-14.4,3.6-67.4,25.4-93.1,30.3-7,1.3-13.7.6-19.3,0-8.2-.9-30.9-1.1-41-1.3-6.6-7.8-14.7-43.6-22-52.9C79.4,253.3,65.5,239,65.5,239c-24-23.9-38.7-41.3-45.9-64.8-11.2-36.7,8.6-62.9,24.6-79.3,60.1-1.8,93.9,20.5,137.3,38.4l2.1-4.1c-14.2-9.6-66.9-38-83.4-41.4a5.4,5.4,0,0,1-3-1.2c18.6-11.4,28.1-24.1,37.2-36.4,7.5-10.1,16.5-26.3,37.8-28.2,64.1,10.2,107.1,33.8,141.7,52.7,4.7,2.6,34.8,18.7,55.1,29s44.7,29.2,54,42.1c13.7,26.3,33.2,98.3,33.3,98.6l4.3-1.4c-1.4-6.7-2.9-14.5-3.3-18.7,11.9,4.7,17.8,3.2,23.9,2.5-11.7-5.6-24.8-14.1-26.6-20.3-4-13.8-15.5-70.2-18.2-73-6.1-7.8-40.5-34.1-54.3-40.6,0,0,13.4-15.8,31.5-25s35.5-3.5,44.2,0c4.8,1.9,8.7,3.9,12.2-.5l-2.3-2.6c1,0.3,7.7,2.1,8.2,2.4,11.2,8.8,41.1,41.2,59.5,76.4,4.3,8.4,4.5,13.3,3.9,23s-19.3,58.8-19.2,63.4c-2.4,17.8,16.4,39.3,16.8,40.2l11.3-.7c3.4,20.1,18.2,52.6,19.8,54.6,3.8,6.2,0,13.3-.1,20.2,0,2.3-.3,4.5-0.4,6.6l-0.7-2.3-3.3,1.6c-0.5-9.6-10.7-8.9-19.4-9l-7.1-1.7c2.2,2,8.8,1.8,6.1,6.2-2.3,1.2-3.3,6.4-4.6,10.8l-3.8.2c6.8,2.7,13.1,5,20.6,8.1l3.8,0.6-3.8,9.4-5.1-2.1-0.2-3.6c-9-3.6-26.3-5.1-27-4.4-6.4,6.3-11.1,13.9-16.1,21.2,6.9-5.4,12.2-13.5,21.5-15.8,0.7-.1,10,1.7,15.1,2.6-3.2.7-8.5,0.9-9.3,2-7.1,8.8-12.3,19.5-18.4,29.3,8.4-8.7,11-17.6,25.3-26.1,1.2-.8,9.9-0.6,14.2,1.5-1.4,4.8-4.4,10.6-6.9,16.1-3.5,8.3-10.2,15.9-15.4,23.9,16.1-19.6,11.5-12.4,22.3-25,4.5-10.7,12.7-33.6,13.4-33.8,0.9,3,2.4.8,10.1,0.6,3.9,0,8.4-1.9,11.6-1.7l0.3,1.6c9.9-1,24-13.5,29.6-8,3.3,3.2,4,11.7,4,13.3C622.4,387.1,602.7,475.2,546.8,489.7Zm2.4-130.8c-1.3.5-9.4,0.1-9.8-1.6s1-8.1,2.9-9.2c0,0,7.7-.8,8.8,3.1C551.6,352.8,549.8,358.6,549.2,358.9Z"></path>
    </symbol>

    <symbol id="hi-impala" viewBox="0 0 640 640">
      <path d="M373.7,0.1c33.5,31.7,60.2,78.2,70.3,127.7,6.8,33.1,6.4,70.8-.7,103.9-0.9,4.3-2.8,4.5-6,7.6-21.3,20.4-41.7,41.6-54.4,68.5-5.5,11.6-8.1,24.7-10.9,37.4-0.8,3.5,1.8,10.4,4.3,11.2s10.1-.2,12.9-3c11.4-11.5,19.4-20,29.4-32.6s18.6-27.7,34.7-49.2c6.2,35.4-5,84.8-33.7,100.2-4.1,2.2-7.4,6.2-10.7,9.7-17.6,18.8-16.4,32.8,4.1,46.9-6,3.5-4.7,3.2-9.4,4.7s-4.9,9.2-6.8,13.4-8.3,4.4-8.8,13.3c-2.5,46.1-9.1,106.2-28.2,148.9-6.5,15.7-17.9,25.3-36.5,31.3,3.8-8.7,1.9-13,.2-20.1-9-1-15.2-4.6-22.2-7.4-1.1-1.9,7.3,0,8.4,0,6.7,0.3,12.8-.7,14.3-8.6s-2.3-14.9-9.7-18.7-14-6.1-12.8-18.2c1.7-1,11.8,8.1,15.7,12.8,8.8,9.3,13-1.8,17.9-6.6s6.4-5.1,6-6.9c-1.2-6.2-1.1-12-2.4-20.4-6.4-41.1-4.3-72.2,20-106.9,11.8-16.8,9.1-34.4,2.1-46.3-2.5-4.2-4.6-8.5-7.3-12.5-19.7-28.4-18.8-62.4-2.6-91.1,11.7-21.7,33.3-54.8,58.1-74.3,2.7-2.5,5.2-19.4,7.2-39.6C421.8,119.2,416,67.8,373.7.1Z"></path>
      <path d="M259.9,0c-23.6,39.9-39.6,69-42.9,122.1-1.8,29.2-.4,57.9,5.7,86.4,0.8,3.7,3.9,7.1,6.7,10,23.7,24.9,45.3,51.3,57,84.2a121.6,121.6,0,0,1,6.5,32.2c1.3,18.8-12.2,32.5-32.6,34.7-0.7-8.8-1.5-24.9-2.8-33.5-5.8-37.3-32.2-68.9-64.1-100.9-3.5-3.5-6.1-13.6-7.2-27.7C179.8,127.1,201.1,58.9,259.9,0Z"></path>
      <path d="M239.3,430.2c13-9.8,34.3-9.1,40.9,7.7,9.7,18.6,18,67.7,15.9,68-4.7-11.4-14.6-37.9-19.2-49.3-2.3-5.9-6.6-3.1-13.3-4.5-9.5-1.9-7.4-14.4-10.9-18.1S246.2,432.6,239.3,430.2Z"></path>
      <path d="M237.5,374.9c-25.3-16.2-50.2-43.5-50.2-76.2C212,318.8,225.1,350,237.5,374.9Z"></path>
    </symbol>

    <symbol id="hi-job-designer" viewBox="0 0 640 640">
      <path d="M595.65,152.73,403.42,466.31l-69.55-48.53,192.2-313.6Zm-25.2-120.9-29.6,48.23,69.58,48.55L640,80.35ZM325.86,446.63l-33,119.06,89-80Z"></path>
      <ellipse cx="64.08" cy="79.77" rx="64.08" ry="64.18"></ellipse>
      <ellipse cx="304.43" cy="196.31" rx="64.08" ry="64.18"></ellipse>
      <ellipse cx="64.08" cy="560.23" rx="64.08" ry="64.18"></ellipse>
      <polygon points="283.28 580.84 44.69 580.84 44.69 48.48 313.06 178.43 295.63 214.43 84.69 112.29 84.69 540.84 283.28 540.84 283.28 580.84"></polygon>
    </symbol>

    <symbol id="hi-logo" viewBox="0 0 159.657 40">
        <path class="svg-hue-logo-main" d="M26.691,0c-.263,0-.523,0-.784.012l.07,13.609H10.1A26.108,26.108,0,0,1,16.693,1.733C6.906,5.271,0,13.846,0,23.867A22.465,22.465,0,0,0,7.024,40h9.94A26.2,26.2,0,0,1,10.1,27.832H25.977V40h9.187V1.234A29.527,29.527,0,0,0,26.691,0Z"></path>
        <path class="svg-hue-logo-trunk" d="M37.96,2.316V22.565c2.807.258,5.034,4.249,5.034,9.135,0,3.677-1.262,6.846-3.084,8.3H45.4a23.571,23.571,0,0,0,6.383-16.133A23.842,23.842,0,0,0,37.96,2.316ZM40.717,14.4a1.952,1.952,0,0,1-1.834-2.051A1.952,1.952,0,0,1,40.717,10.3a1.835,1.835,0,0,1,1.668,1.2,1.137,1.137,0,0,0-.943-.537l-.023,0a.576.576,0,0,1,.245.481.506.506,0,1,1-1.006,0,.63.63,0,0,1,.025-.168,1.371,1.371,0,0,0-.408.992,1.244,1.244,0,0,0,1.168,1.308,1.17,1.17,0,0,0,1.058-.754A1.889,1.889,0,0,1,40.717,14.4Z"></path>
        <path class="svg-hue-logo-main" d="M74.5,40c-14.2,0-18.368-4.38-18.368-16.532V1.71h10.6V23.186c0,6.5,2.19,7.841,8.619,7.841H86.364c6.853,0,8.618-1.341,8.618-7.841V1.71h10.456V23.468C105.439,35.62,101.27,40,86.929,40Z"></path>
        <path class="svg-hue-logo-main" d="M159.657,24.74V12.165c0-6.076-3.038-10.455-13.988-10.455h-18.51c-13.493,0-17.379,3.744-17.379,14.907v8.83C109.78,35.62,114.513,40,126.664,40h28.19V32.017h-28.19c-4.945,0-6.358-.848-6.358-5.511V24.74Zm-39.35-8.83c0-5.511,1.7-6.076,6.994-6.076H144.82c3.18,0,4.311.636,4.311,3.18v4.945H120.306Z"></path>
    </symbol>

    <symbol id="hi-markdown" viewBox="0 0 640 640">
      <path d="M593.85,516.92H46.15A46.21,46.21,0,0,1,0,470.77V169.23a46.21,46.21,0,0,1,46.15-46.15H593.85A46.21,46.21,0,0,1,640,169.23V470.77A46.21,46.21,0,0,1,593.85,516.92ZM46.15,153.85a15.4,15.4,0,0,0-15.38,15.38V470.77a15.4,15.4,0,0,0,15.38,15.38H593.85a15.4,15.4,0,0,0,15.38-15.38V169.23a15.4,15.4,0,0,0-15.38-15.38Z"></path>
      <path d="M92.31,424.62V215.38h61.54l61.54,76.92,61.54-76.92h61.54V424.62H276.92v-120l-61.54,76.92-61.54-76.92v120Z"></path>
      <path d="M476.92,424.62,384.62,323.08h61.54V215.38h61.54V323.08h61.54Z"></path>
    </symbol>

    <symbol id="hi-oozie" viewBox="0 0 640 640">
      <path d="M523.82,640H116.18A116.31,116.31,0,0,1,0,523.82V116.18A116.31,116.31,0,0,1,116.18,0H523.82A116.31,116.31,0,0,1,640,116.18V523.82A116.31,116.31,0,0,1,523.82,640ZM116.18,32.05a84.23,84.23,0,0,0-84.13,84.13V523.82a84.23,84.23,0,0,0,84.13,84.13H523.82a84.23,84.23,0,0,0,84.13-84.13V116.18a84.23,84.23,0,0,0-84.13-84.13Z"></path>
      <path d="M320,530c-115.79,0-210-94.21-210-210s94.21-210,210-210,210,94.21,210,210S435.79,530,320,530Zm0-388c-98.15,0-178,79.85-178,178s79.85,178,178,178,178-79.85,178-178S418.15,142,320,142Z"></path>
      <circle cx="320" cy="320" r="34"></circle>
    </symbol>

    <symbol id="hi-oozie-bundle" viewBox="0 0 640 640">
      <path d="M523.82,640H116.18A116.31,116.31,0,0,1,0,523.82V116.18A116.31,116.31,0,0,1,116.18,0H523.82A116.31,116.31,0,0,1,640,116.18V523.82A116.31,116.31,0,0,1,523.82,640ZM116.18,32.05a84.23,84.23,0,0,0-84.13,84.13V523.82a84.23,84.23,0,0,0,84.13,84.13H523.82a84.23,84.23,0,0,0,84.13-84.13V116.18a84.23,84.23,0,0,0-84.13-84.13Z"></path>
      <path d="M320,530c-115.79,0-210-94.21-210-210s94.21-210,210-210,210,94.21,210,210S435.79,530,320,530Zm0-388c-98.15,0-178,79.85-178,178s79.85,178,178,178,178-79.85,178-178S418.15,142,320,142Z"></path>
      <path d="M249.47,197.65h36.75c-.21-.49,0,85.11,0,85.11s16.4-26.12,50.29-26.12c57.43,0,78,46.76,78,88.66,0,51.21-27.3,87-71.89,87-46.19,0-58.36-27.4-58.36-27.4v22.89H249.47Zm128.31,147c0-41.75-24.46-59-46.1-59-42.06,0-46.75,41.16-46.75,59,0,31.05,14.77,58.68,46.75,58.68C376.07,403.34,377.78,352,377.78,344.66Z"></path>
    </symbol>

    <symbol id="hi-oozie-coordinator" viewBox="0 0 640 640">
      <path d="M523.82,640H116.18A116.31,116.31,0,0,1,0,523.82V116.18A116.31,116.31,0,0,1,116.18,0H523.82A116.31,116.31,0,0,1,640,116.18V523.82A116.31,116.31,0,0,1,523.82,640ZM116.18,32.05a84.23,84.23,0,0,0-84.13,84.13V523.82a84.23,84.23,0,0,0,84.13,84.13H523.82a84.23,84.23,0,0,0,84.13-84.13V116.18a84.23,84.23,0,0,0-84.13-84.13Z"></path>
      <path d="M320,530c-115.79,0-210-94.21-210-210s94.21-210,210-210,210,94.21,210,210S435.79,530,320,530Zm0-388c-98.15,0-178,79.85-178,178s79.85,178,178,178,178-79.85,178-178S418.15,142,320,142Z"></path>
      <path d="M361.91,292.44c-1.51-10.32-8.53-31.27-38-31.27-32.57,0-45.78,26.76-45.78,60.61,0,6.88,1.65,57.07,44.17,57.07,30.27,0,37.93-26,39.66-38h36.75c-3.76,29.76-23.45,67.06-76.41,67.06-59.21,0-80.92-45.44-80.92-86.08,0-40.28,19.14-89.63,82.21-89.63,56,0,75.12,38.22,75.12,60.29Z"></path>
    </symbol>

    <symbol id="hi-oozie-workflow" viewBox="0 0 640 640">
      <path d="M523.82,640H116.18A116.31,116.31,0,0,1,0,523.82V116.18A116.31,116.31,0,0,1,116.18,0H523.82A116.31,116.31,0,0,1,640,116.18V523.82A116.31,116.31,0,0,1,523.82,640ZM116.18,32.05a84.23,84.23,0,0,0-84.13,84.13V523.82a84.23,84.23,0,0,0,84.13,84.13H523.82a84.23,84.23,0,0,0,84.13-84.13V116.18a84.23,84.23,0,0,0-84.13-84.13Z"></path>
      <path d="M320,530c-115.79,0-210-94.21-210-210s94.21-210,210-210,210,94.21,210,210S435.79,530,320,530Zm0-388c-98.15,0-178,79.85-178,178s79.85,178,178,178,178-79.85,178-178S418.15,142,320,142Z"></path>
      <path d="M198.78,243.66h39l32.56,124.45H271l31.27-124.45h37.08l30,124.45H370l33.85-124.45h37.4L389,410.34H351.27l-30.95-123.8h-.64L289,410.34H250.36Z"></path>
    </symbol>

    <symbol id="hi-pig" viewBox="0 0 640 640">
      <path d="M177.15,322.12a28.57,28.57,0,1,1,28.58,28.56A28.57,28.57,0,0,1,177.15,322.12Z"></path>
      <path d="M405.71,322.12a28.57,28.57,0,1,1,28.56,28.56A28.56,28.56,0,0,1,405.71,322.12Z"></path>
      <path d="M320,536.15c-40.67,0-79.11-9.63-108.24-27.1-31.38-18.83-48.67-44.63-48.67-72.66s17.28-53.83,48.67-72.66c29.14-17.48,67.58-27.11,108.24-27.11s79.11,9.63,108.24,27.11c31.38,18.83,48.67,44.63,48.67,72.66S459.62,490.22,428.24,509C399.11,526.53,360.67,536.15,320,536.15Zm0-171.41c-69.81,0-128.79,32.81-128.79,71.64S250.19,508,320,508s128.79-32.81,128.79-71.64S389.81,364.74,320,364.74Z"></path>
      <path d="M262.86,436.38c0-15.78,6.4-28.56,14.29-28.56s14.29,12.79,14.29,28.56S285,465,277.15,465,262.86,452.17,262.86,436.38Z"></path>
      <path d="M348.56,436.38c0-15.78,6.4-28.56,14.29-28.56s14.29,12.79,14.29,28.56S370.74,465,362.85,465,348.56,452.17,348.56,436.38Z"></path>
      <path d="M629.24,132l-123-111.91a32.86,32.86,0,0,0-54.53,18.87L442,96.81a335.06,335.06,0,0,0-244,0l-9.71-57.88a32.86,32.86,0,0,0-54.53-18.87L10.76,132a32.86,32.86,0,0,0,10.07,54.88L62,203.09A269.09,269.09,0,0,0,39.32,242.5a255.24,255.24,0,0,0,0,217.31A276.66,276.66,0,0,0,105.1,548C162.6,599.9,238.92,628.5,320,628.5S477.4,599.9,534.9,548a276.66,276.66,0,0,0,65.78-88.16,255.24,255.24,0,0,0,0-217.31A269.1,269.1,0,0,0,578,203.09l41.21-16.25A32.86,32.86,0,0,0,629.24,132ZM151,58.45l24.56,146.39-129.39-51Zm434,292.7C585,482,466.1,588.5,320,588.5S55,482,55,351.15c0-49.19,16.81-94.93,45.53-132.87l72.05,28.4a32.86,32.86,0,0,0,44.46-36L204.8,137.44a292.59,292.59,0,0,1,230.41,0l-12.28,73.23a32.88,32.88,0,0,0,44.46,36l72.05-28.4C568.16,256.22,585,302,585,351.15ZM464.46,204.84,489,58.45l104.83,95.39Z"></path>
    </symbol>

    <symbol id="hi-plus-addon" viewBox="0 0 640 640">
      <circle style="fill:#FFF" cx="483.82" cy="484.82" r="170.68"></circle>
      <circle cx="483.82" cy="484.82" r="155.31"></circle>
      <rect style="fill:#FFF" x="456.92" y="374.09" width="43.79" height="209.46"></rect>
      <rect style="fill:#FFF" x="461.92" y="380.09" width="43.79" height="209.46" transform="translate(968.64 1) rotate(90)"></rect>
    </symbol>

    <symbol id="hi-py" viewBox="0 0 640 640">
      <path d="M316.23,0a436.08,436.08,0,0,0-73,6.23c-64.61,11.42-76.34,35.31-76.34,79.37v58.19H319.62v19.4h-210c-44.37,0-83.23,26.67-95.38,77.41-14,58.16-14.65,94.45,0,155.18C25.1,441,51,473.18,95.39,473.18h52.5V403.42c0-50.39,43.6-94.85,95.38-94.85H395.78c42.45,0,76.34-35,76.34-77.59V85.6c0-41.37-34.9-72.46-76.34-79.37A475.71,475.71,0,0,0,316.23,0Zm-82.57,46.8c15.77,0,28.65,13.09,28.65,29.18A28.65,28.65,0,1,1,205,76C205,59.9,217.83,46.81,233.66,46.81Z"></path>
      <path d="M491.16,163.19V231c0,52.57-44.56,96.8-95.38,96.8H243.27c-41.77,0-76.34,35.76-76.34,77.59V550.77c0,41.37,36,65.72,76.34,77.58,48.33,14.21,94.67,16.79,152.51,0,38.44-11.12,76.34-33.53,76.34-77.58v-58.2H319.61V473.18H548.46c44.38,0,60.92-30.95,76.34-77.41,15.94-47.83,15.26-93.83,0-155.18-11-44.17-31.91-77.41-76.34-77.41h-57.3ZM405.39,531.37a28.81,28.81,0,0,1,28.65,29c0,16.09-12.82,29.19-28.65,29.19s-28.65-13.1-28.65-29.19A28.84,28.84,0,0,1,405.39,531.37Z"></path>
    </symbol>

    <symbol id="hi-r" viewBox="0 0 640 640">
      <path d="M320,496.89c-176.73,0-320-96-320-214.31S143.27,68.27,320,68.27s320,96,320,214.31S496.73,496.89,320,496.89Zm49-344.84c-134.33,0-243.23,65.6-243.23,146.51S234.65,445.08,369,445.08s233.46-44.85,233.46-146.51S503.31,152.06,369,152.06Z"></path>
      <path d="M487.34,400.21s19.37,5.84,30.62,11.54c3.9,2,10.66,5.92,15.53,11.09A41.94,41.94,0,0,1,540.6,433l76.33,128.69-123.37.06L435.87,453.46s-11.81-20.3-19.08-26.18c-6.06-4.91-8.65-6.66-14.64-6.66H372.83l0,141.1-109.17,0V201.34H482.91s99.85,1.8,99.85,96.8S487.34,400.21,487.34,400.21ZM439.86,279.52l-66.09,0,0,61.28,66.12,0s30.62-.09,30.62-31.17C470.48,277.86,439.86,279.52,439.86,279.52Z"></path>
    </symbol>

    <symbol id="hi-share-addon" viewBox="0 0 640 640">
      <path style="fill:#FFF" d="M646.3,538.84c-9.43-30-29.24-48.82-55.26-53.44a83,83,0,1,0-147.45,0c-26,4.62-45.87,23.49-55.41,53.76-2.16,6.75-8.34,32-8.34,58.46,0,46.62,34.31,56.4,63.1,56.4H591.7c39.51,0,63.1-21.09,63.1-56.41C654.8,576.74,648.9,547,646.3,538.84Z"></path>
      <circle cx="517.32" cy="447.4" r="57.42"></circle>
      <path d="M591.71,637H442.94c-43.88,0-45.44-25.47-45.44-39.08,0-23.9,5.68-47.56,7.49-53.24s12.5-42.75,51.4-42.75c1,0,3.58.94,7.15,3.64,24.32,18.36,46.19,20,53.79,20s26.36-.57,53.78-20c3.65-2.59,6.13-3.67,7.15-3.67,39.14,0,49.59,37.22,51.41,42.89s7.48,33.9,7.48,53.15C637.15,611.53,632.73,637,591.71,637Z"></path>
    </symbol>

    <symbol id="hi-share-addon-selected" viewBox="0 0 640 640">
      <path style="fill:#DBE8F1" d="M646.3,538.84c-9.43-30-29.24-48.82-55.26-53.44a83,83,0,1,0-147.45,0c-26,4.62-45.87,23.49-55.41,53.76-2.16,6.75-8.34,32-8.34,58.46,0,46.62,34.31,56.4,63.1,56.4H591.7c39.51,0,63.1-21.09,63.1-56.41C654.8,576.74,648.9,547,646.3,538.84Z"></path>
      <circle cx="517.32" cy="447.4" r="57.42"></circle>
      <path d="M591.71,637H442.94c-43.88,0-45.44-25.47-45.44-39.08,0-23.9,5.68-47.56,7.49-53.24s12.5-42.75,51.4-42.75c1,0,3.58.94,7.15,3.64,24.32,18.36,46.19,20,53.79,20s26.36-.57,53.78-20c3.65-2.59,6.13-3.67,7.15-3.67,39.14,0,49.59,37.22,51.41,42.89s7.48,33.9,7.48,53.15C637.15,611.53,632.73,637,591.71,637Z"></path>
    </symbol>

    <symbol id="hi-scala" viewBox="0 0 640 640">
      <path d="M516.92,147.69V0c0,61.54-393.85,86.15-393.85,98.46V246.15c0,5.29,72.63,12.84,155.5,24.62-82.88,11.77-155.5,19.33-155.5,24.61V443.08c0,5.29,72.63,12.84,155.5,24.62-82.88,11.77-155.5,19.33-155.5,24.61V640c0-12.31,393.85-36.92,393.85-98.46V393.85c0-9-8.37-17.14-22.65-24.61,14.28-7.47,22.65-15.65,22.65-24.62V196.92c0-9-8.37-17.14-22.65-24.61C508.55,164.84,516.92,156.66,516.92,147.69Zm-20,392.41c-1.47,1.79-7.78,7.93-29.66,16-18.13,6.71-43.17,13.39-74.44,19.84-58.61,12.1-127.46,21.21-182.78,28.54-26.12,3.46-48.67,6.44-64.86,9.07l-2.1.34V506.81c15.81-2.87,45.37-6.79,72.21-10.34,20.05-2.65,42.78-5.66,66.11-9,45.44-6.46,111.75-16.6,162.77-30.09,21.87-5.78,39.24-11.69,52.76-18Zm0-196.93c-1,1.17-4,4.17-11.92,8.34-50.32,26.33-185.51,44.23-275,56.08-26.12,3.46-48.67,6.44-64.86,9.07l-2.1.34V309.89c15.81-2.87,45.37-6.79,72.21-10.34,20.05-2.65,42.78-5.66,66.11-9,45.44-6.46,111.75-16.6,162.77-30.09,21.87-5.78,39.24-11.69,52.76-18Zm0-196.92c-1,1.17-4,4.17-11.92,8.34-50.32,26.33-185.51,44.23-275,56.07-26.12,3.46-48.67,6.44-64.86,9.07l-2.1.34V113c15.81-2.87,45.37-6.79,72.21-10.34,57-7.54,135-17.87,197.36-31.51,35.28-7.72,61.82-15.6,81.13-24.09.9-.4,2-.86,3.14-1.4Z"></path>
    </symbol>

    <symbol id="hi-spark" viewBox="0 0 640 640">
      <path d="M292.14,50.44c.33.49.62,1.35,1,1.4,19.84,2.63,32.42,15.35,42.16,31.24,21.6,35.26,42.73,70.81,64.07,106.22,2.74,4.55,4.66,10.86,8.72,13,3.44,1.78,9.49-1.08,14.27-2.33,22-5.76,44-11.73,66-17.51q30.55-8,61.16-15.81c13.39-3.4,26.69-7.52,40.3-9.6,16.17-2.47,31.85.33,43.23,13.46,9.31,10.74,9.34,30.12-.27,44.4-8.89,13.21-19,25.66-29.08,38-13.75,16.81-28,33.23-42,49.78-17.94,21.1-35.72,42.34-54.06,63.07-4.2,4.75-3.79,8.3-1.25,13,9,16.7,18,33.41,26.75,50.21,14.83,28.37,30.59,56.31,44,85.35,15.72,34.13-5.19,70.46-43,74.78-20.52,2.34-38.38-5.36-57-10.69-24.55-7-48.95-14.63-73.4-22A131.23,131.23,0,0,1,391,552.28a6.21,6.21,0,0,1-3.1-4.08c-4.27-24.86-8.36-49.76-12.64-75.54l116.53,32.08c-3-6-5.25-10.77-7.74-15.48q-26-49.23-52-98.42c-3-5.65-6.35-11.15-8.73-17-.88-2.18-.39-6.1,1.09-7.86,20.83-24.77,42-49.27,63-73.9q21.16-24.82,42.14-49.79a14.84,14.84,0,0,0,1.16-2.89c-8.67,2.14-16.53,4-24.33,6q-48.45,12.78-96.87,25.68c-10.26,2.74-20.51,5.54-30.71,8.53-5.47,1.6-8.84.36-11.95-4.91-18-30.48-36.34-60.72-54.59-91-5.91-9.81-11.86-19.6-18.77-31-1.13,3.43-2,5.22-2.31,7.1q-9.47,53.31-18.84,106.64c-2.52,14.23-5,28.47-7.76,42.66a6.63,6.63,0,0,1-3.68,4.3c-39.11,12.54-78.28,24.88-117.44,37.28-12.5,4-25,8-39.4,12.62l123.05,49L202,428.46c-18.09,11.68-36.25,23.26-54.21,35.14-3.46,2.29-6.3,2.32-9.84.72-23.69-10.69-47.55-21-71.1-32-13.65-6.38-27.57-12.69-40-21.05C11,400.63.61,385.23,0,365.56a41.57,41.57,0,0,1,11.27-29.69,79.46,79.46,0,0,1,34.1-22c23.82-8,47.92-15.19,71.87-22.81,28-8.9,56-17.8,83.87-27,2.18-.72,4.54-3.94,5-6.35,3.69-19.21,6.91-38.5,10.35-57.76,3.73-20.88,7.75-41.72,11.23-62.64,2.62-15.76,5.13-31.44,11.85-46.17,8.87-19.45,20.9-35.17,43.5-39.38.52-.1.92-.85,1.38-1.3Z"></path>
    </symbol>

    <symbol id="hi-sqoop" viewBox="0 0 640 640">
      <path d="M320,640a321,321,0,0,1-148.87-36.83L147,590.46l21.75-21.75h-50l-5.62-4.79A319.71,319.71,0,0,1,0,320C0,143.56,143.56,0,320,0A319.64,319.64,0,0,1,485.87,46.7L507.71,60,467,100.67h85.67l6,6.71A319.46,319.46,0,0,1,640,320C640,496.44,496.44,640,320,640ZM215,579.3a276.5,276.5,0,0,0,105,20.49c154.3,0,279.81-125.49,279.81-279.79a279.08,279.08,0,0,0-65.29-179.15H370.06l72.23-72.23A278.32,278.32,0,0,0,320,40.21C165.7,40.21,40.19,165.7,40.19,320a279.44,279.44,0,0,0,93.45,208.52H265.71Z"></path>
    </symbol>

    <symbol id="hi-warning" viewBox="-0.002 0 512.001 449.468">
      <path d="M507.747,413.145L275.868,11.503C271.763,4.392,264.163,0,255.947,0c-8.229,0-15.816,4.392-19.923,11.503L3.09,414.959   c-4.123,7.117-4.123,15.901,0,23.006c4.106,7.117,11.694,11.503,19.922,11.503h465.869c0.045,0,0.084,0,0.112,0   c12.71,0,23.006-10.301,23.006-23.006C511.999,421.503,510.426,416.908,507.747,413.145z M62.857,403.462l193.09-334.444   l193.078,334.438H62.857V403.462z" ></path>
      <path d="M232.941,171.853V274.48c0,12.705,10.301,23.006,23.006,23.006s23.006-10.301,23.006-23.006V171.853   c0-12.705-10.301-23.006-23.006-23.006S232.941,159.148,232.941,171.853z"></path>
      <path d="M255.918,317.813c-7.543,0-14.963,3.044-20.305,8.402c-5.347,5.353-8.452,12.767-8.452,20.355   c0,7.543,3.105,14.957,8.452,20.298c5.354,5.358,12.772,8.459,20.305,8.459c7.583,0,15.002-3.101,20.36-8.459   c5.348-5.353,8.453-12.767,8.453-20.298c0-7.589-3.105-15.003-8.453-20.355C270.926,320.863,263.506,317.813,255.918,317.813z"></path>
    </symbol>

    <symbol id="hi-navopt" viewBox="0 0 16 16">
      <path d="M13.6715089,5.08566526 C12.993166,4.41857118 12.0703083,4.05984279 11.1195089,4.09366526 C9.00750888,4.17366526 8.20750888,6.02966526 7.49550888,7.66966526 C6.71150888,9.50966526 6.13550888,10.5816653 4.71950888,10.5816653 C3.17290524,10.5555273 1.93164528,9.29648422 1.92750888,7.74966526 C1.85926136,6.98749906 2.13022693,6.23396948 2.66822427,5.68980598 C3.20622161,5.14564248 3.95661444,4.86610754 4.71950888,4.92566526 C5.23235965,4.96001208 5.71544747,5.17882244 6.07950888,5.54166526 L5.51950888,6.01366526 L5.51950888,6.05366526 L7.48750888,6.39766526 L7.38350888,4.41366526 L7.34350888,4.41366526 L6.77550888,4.92566526 C6.23278367,4.3677305 5.49717167,4.0385656 4.71950888,4.00566526 L4.71950888,4.00566526 C3.71293207,3.94852457 2.73017068,4.32574043 2.0203337,5.0416967 C1.31049671,5.75765298 0.941730305,6.743616 1.00750888,7.74966526 C1.01561738,9.78614872 2.64356673,11.4460186 4.67950888,11.4936653 C6.83150888,11.5736653 7.63950888,9.70166526 8.35950888,8.04566526 C9.01550888,6.51766526 9.63950888,5.07766526 11.1675089,5.02166526 C11.8670834,5.00699428 12.5416321,5.28202489 13.0315089,5.78166526 C13.5947008,6.33032009 13.9120924,7.08340392 13.9115089,7.86966526 C13.885725,9.39952392 12.6494352,10.6322713 11.1195089,10.6536653 C10.5992283,10.6714511 10.0921001,10.4880828 9.70350888,10.1416653 L10.2155089,9.69366526 L10.2155089,9.65366526 L9.11950888,9.44566526 L9.11950888,9.44566526 L8.27150888,9.28566526 L8.37550888,11.2776653 L8.41550888,11.2776653 L9.01550888,10.7576653 C9.56232912,11.2744785 10.2871144,11.5609549 11.0395089,11.5576653 L11.1755089,11.5576653 C13.2060603,11.4976424 14.8269218,9.84499932 14.8475089,7.81366526 C14.8373644,6.78338723 14.4136156,5.80040535 13.6715089,5.08566526 L13.6715089,5.08566526 Z"></path>
    </symbol>

    <symbol id="hi-as-navopt" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g stroke="#FFFFFF" fill-rule="nonzero" fill="#FFFFFF">
          <path d="M13.6715089,5.08566526 C12.993166,4.41857118 12.0703083,4.05984279 11.1195089,4.09366526 C9.00750888,4.17366526 8.20750888,6.02966526 7.49550888,7.66966526 C6.71150888,9.50966526 6.13550888,10.5816653 4.71950888,10.5816653 C3.17290524,10.5555273 1.93164528,9.29648422 1.92750888,7.74966526 C1.85926136,6.98749906 2.13022693,6.23396948 2.66822427,5.68980598 C3.20622161,5.14564248 3.95661444,4.86610754 4.71950888,4.92566526 C5.23235965,4.96001208 5.71544747,5.17882244 6.07950888,5.54166526 L5.51950888,6.01366526 L5.51950888,6.05366526 L7.48750888,6.39766526 L7.38350888,4.41366526 L7.34350888,4.41366526 L6.77550888,4.92566526 C6.23278367,4.3677305 5.49717167,4.0385656 4.71950888,4.00566526 L4.71950888,4.00566526 C3.71293207,3.94852457 2.73017068,4.32574043 2.0203337,5.0416967 C1.31049671,5.75765298 0.941730305,6.743616 1.00750888,7.74966526 C1.01561738,9.78614872 2.64356673,11.4460186 4.67950888,11.4936653 C6.83150888,11.5736653 7.63950888,9.70166526 8.35950888,8.04566526 C9.01550888,6.51766526 9.63950888,5.07766526 11.1675089,5.02166526 C11.8670834,5.00699428 12.5416321,5.28202489 13.0315089,5.78166526 C13.5947008,6.33032009 13.9120924,7.08340392 13.9115089,7.86966526 C13.885725,9.39952392 12.6494352,10.6322713 11.1195089,10.6536653 C10.5992283,10.6714511 10.0921001,10.4880828 9.70350888,10.1416653 L10.2155089,9.69366526 L10.2155089,9.65366526 L9.11950888,9.44566526 L9.11950888,9.44566526 L8.27150888,9.28566526 L8.37550888,11.2776653 L8.41550888,11.2776653 L9.01550888,10.7576653 C9.56232912,11.2744785 10.2871144,11.5609549 11.0395089,11.5576653 L11.1755089,11.5576653 C13.2060603,11.4976424 14.8269218,9.84499932 14.8475089,7.81366526 C14.8373644,6.78338723 14.4136156,5.80040535 13.6715089,5.08566526 L13.6715089,5.08566526 Z" id="Shape"></path>
        </g>
      </g>
    </symbol>

    <symbol id="hi-as-cdsw" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g stroke="#FFFFFF">
          <ellipse id="Oval" transform="translate(8.002582, 7.560873) rotate(-45.000000) translate(-8.002582, -7.560873) " cx="8.00258152" cy="7.56087302" rx="6.856" ry="3.232"></ellipse>
          <ellipse id="Oval" cx="8" cy="7.544" rx="6.856" ry="3.232"></ellipse>
          <ellipse id="Oval" transform="translate(8.000533, 7.561409) rotate(-47.040000) translate(-8.000533, -7.561409) " cx="8.00053304" cy="7.56140917" rx="3.232" ry="6.856"></ellipse>
        </g>
      </g>
    </symbol>

    <symbol id="hi-as-cm" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero" fill="#FFFFFF">
          <path d="M8.53138223,2.01125581 C10.9987757,1.84116951 13.1737446,3.6174481 13.5,6.06908374 L10.5010578,6.06908374 C10.2510574,5.19948823 9.43505377,4.61662847 8.53138223,4.66217259 C6.9393512,4.6547678 6.05818054,6.06908374 6.05818054,7.94990179 C6.05818054,9.83071984 6.9393512,11.2524406 8.53138223,11.2524406 C9.44010578,11.2990793 10.2591456,10.7078926 10.5010578,9.83071984 L13.5,9.83071984 C13.1772934,12.2853254 11.0012841,14.0656967 8.53138223,13.8959526 C5.31029619,13.8959526 3,11.4375605 3,7.97211618 C3,4.50667189 5.31770099,2.01125581 8.53138223,2.01125581 Z" id="Shape"></path>
        </g>
      </g>
    </symbol>

    <symbol id="hi-as-nav" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group" transform="translate(2.000000, 1.000000)">
          <path d="M11.9466667,8.07146667 C11.7721491,9.24913858 11.0527512,10.2756641 10.0053333,10.8416 C8.858676,11.6377727 7.66148625,12.3585807 6.42133333,12.9994667 L5.97333333,13.2384 L5.52533333,12.9994667 C4.28515987,12.3586175 3.08796777,11.6378081 1.94133333,10.8416 C0.89391551,10.2756641 0.174517551,9.24913858 0,8.07146667 L0,1.86666667 L5.97333333,0 L11.9466667,1.86666667 L11.9466667,8.07146667 Z" id="Shape" stroke="#FFFFFF" stroke-width="1.35"></path>
          <path d="M8.12373333,4.73386667 L8.12373333,3.9872 C8.05619497,2.83458659 7.10179045,1.93446916 5.9472,1.93446916 C4.79260955,1.93446916 3.83820503,2.83458659 3.77066667,3.9872 L3.77066667,4.73386667 C3.35829405,4.73386667 3.024,5.06816072 3.024,5.48053333 L3.024,5.48053333 L3.024,9.10933333 C3.024,9.52170595 3.35829405,9.856 3.77066667,9.856 L8.12373333,9.856 C8.53610595,9.856 8.8704,9.52170595 8.8704,9.10933333 L8.8704,9.10933333 L8.8704,5.45813333 C8.8704,5.04576072 8.53610595,4.71146667 8.12373333,4.71146667 L8.12373333,4.73386667 Z M5.23413333,3.9872 C5.31738651,3.65501591 5.61594218,3.42205167 5.9584,3.42205167 C6.30085782,3.42205167 6.59941349,3.65501591 6.68266667,3.9872 L6.68266667,4.73386667 L5.264,4.73386667 L5.23413333,3.9872 Z M7.4144,8.34026667 L4.53226667,8.34026667 L4.53226667,6.18986667 L7.4368,6.18986667 L7.4144,8.34026667 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
        </g>
      </g>
    </symbol>

    <symbol id="hi-as-hue" width="16px" height="16px" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(1.000000, 3.000000)">
          <path d="M6.76068219,0.0038661274 C6.86712441,0.00310758342 6.97356663,0.00212881699 7.08000885,0.00166390293 C7.24836876,0.000905358948 7.41672866,0.000538321537 7.58508857,0 C8.10162645,0.043530637 8.60963733,0.134311223 9.10744971,0.281297472 C9.17552041,0.301411122 9.17554463,0.301435592 9.17554463,0.375430334 L9.17554463,8.37364044 L9.17554463,10.429001 C9.17554463,10.4407462 9.17566575,10.4524914 9.17552041,10.4642366 C9.17486635,10.5141292 9.1748179,10.5146186 9.12365586,10.5146431 C8.86978366,10.5148388 8.61593568,10.514741 8.36206348,10.514741 L6.85632031,10.514741 C6.84081666,10.514741 6.82528879,10.513909 6.80980937,10.5148144 C6.78786202,10.5160868 6.77768775,10.5070821 6.77885053,10.4843013 C6.77977105,10.4667325 6.7789232,10.4490902 6.7789232,10.4314724 C6.77889897,9.42140991 6.77889897,8.41134742 6.77889897,7.40128493 C6.77889897,7.38953974 6.77897165,7.37779454 6.77889897,7.36604934 C6.77855983,7.30866916 6.77853561,7.30835106 6.72218954,7.30835106 C5.37923466,7.30830212 4.03627977,7.30830212 2.69330066,7.30830212 C2.68748679,7.30830212 2.68167292,7.3080819 2.67585905,7.30835106 C2.6410243,7.30994156 2.63792357,7.3126087 2.64550582,7.34529949 C2.65650372,7.39289201 2.66878551,7.4401909 2.68152757,7.48734297 C2.92256082,8.37912154 3.33512738,9.18295794 3.89924207,9.90895794 C4.05129892,10.1046378 4.21280331,10.2920961 4.3840217,10.4709167 C4.3907561,10.4779638 4.39763584,10.4848886 4.4038373,10.4924006 C4.4073014,10.4965848 4.41219473,10.5021393 4.41173447,10.5065438 C4.41052325,10.5178975 4.40008251,10.5139824 4.39327544,10.5144473 C4.38169616,10.5153037 4.3700442,10.514741 4.35841646,10.514741 C3.53480949,10.514741 2.71120252,10.5146431 1.88759555,10.5151325 C1.85351175,10.5151325 1.82613813,10.5100918 1.79944279,10.4832736 C1.17973299,9.86099838 0.699870918,9.14549565 0.382312644,8.32132538 C0.232193746,7.93167846 0.126938524,7.5298459 0.0640518601,7.11680647 C0.00852942776,6.7521181 -0.011189272,6.38486047 0.00605853417,6.01657513 C0.0560093437,4.94998888 0.378121814,3.97217674 0.958757582,3.08137695 C1.52531895,2.21215895 2.26634478,1.52924914 3.15138495,1.00220789 C3.51089996,0.788127199 3.88722675,0.609331041 4.2778944,0.46126815 C4.29238062,0.455762588 4.30708486,0.450868756 4.32171643,0.445730233 C4.32690046,0.443895046 4.33290812,0.442035389 4.33511254,0.448984631 C4.33593618,0.451651769 4.33305347,0.456276441 4.33075214,0.459065925 C4.32452646,0.466553488 4.31774362,0.473551668 4.31113034,0.480672194 C3.86644217,0.960781598 3.48999427,1.4899272 3.18980492,2.07373691 C2.95499736,2.53035592 2.77401651,3.00772477 2.65127124,3.50736057 C2.64894569,3.5168546 2.64611143,3.52622629 2.64390701,3.53572032 C2.63915902,3.55622548 2.64829163,3.56459393 2.66813145,3.56400667 C2.68169714,3.56361517 2.69526284,3.56410455 2.70882853,3.56410455 C4.04209363,3.56412902 5.37535874,3.56412902 6.70864808,3.56410455 C6.77918967,3.56410455 6.77926234,3.56405561 6.77889897,3.49155349 C6.77548333,2.786964 6.77233415,2.08237452 6.76850669,1.37778504 C6.76608424,0.931589889 6.76266859,0.485394742 6.75973744,0.0391751264 C6.75966476,0.0274054601 6.76034305,0.0156357937 6.76068219,0.0038661274" id="Fill-1" fill="#FFFFFF"></path>
          <g transform="translate(9.883574, 0.580776)">
            <mask id="mask-2" fill="white">
              <polygon id="path-1" points="3.62957311 0.0147508577 3.62957311 9.93447927 0.017423568 9.93447927 0.017423568 0.0147508577 3.62957311 0.0147508577"></polygon>
            </mask>
            <path d="M1.17684059,2.8381021 C1.15390004,2.85028775 1.1410853,2.87319088 1.12291697,2.89046611 C1.03394058,2.9751294 0.90894243,2.99379937 0.800441132,2.93764265 C0.626243134,2.84749826 0.56907344,2.5960287 0.683727747,2.42330089 C0.692957261,2.40937794 0.700079249,2.38525134 0.718538277,2.39043881 C0.731522581,2.39408471 0.72127564,2.41855387 0.725442244,2.43311302 C0.729729972,2.44811262 0.733048721,2.46362607 0.73941975,2.4777203 C0.761391324,2.52614477 0.811560153,2.55854194 0.859040069,2.55643759 C0.909862959,2.55416196 0.959305055,2.51650392 0.976480188,2.46541232 C0.993679545,2.41439412 0.988713534,2.36557814 0.959329279,2.31984528 C0.953224719,2.31037571 0.937188135,2.30164022 0.943413818,2.29116742 C0.95099607,2.2784924 0.968413447,2.28502566 0.980913262,2.2873747 C1.03987557,2.29838582 1.08970525,2.32674558 1.13091104,2.37083901 C1.13558636,2.37587966 1.14144867,2.38591201 1.14808617,2.38106712 C1.15571687,2.37551262 1.14752901,2.36702182 1.14408914,2.36070878 C1.08599891,2.25368067 1.00191586,2.17537935 0.887939834,2.13373284 C0.697002744,2.06399573 0.487315931,2.1355925 0.365297392,2.30954376 C0.210164034,2.53069604 0.228041676,2.84191929 0.411759881,3.04087804 C0.506089878,3.14306125 0.626340032,3.19677106 0.76550948,3.18747278 C0.908627512,3.17790534 1.02274888,3.10714053 1.10741332,2.99064285 C1.14033435,2.94532597 1.17475729,2.89934841 1.17824561,2.83932556 C1.18401102,2.83790635 1.18691796,2.83384447 1.18650614,2.82819209 C1.18640924,2.82652819 1.18296937,2.82508451 1.18107987,2.82356742 C1.17967485,2.82841232 1.17824561,2.83325721 1.17684059,2.8381021 M1.25120964,9.93332677 C1.036145,9.93332677 0.821080361,9.93332677 0.606015721,9.93330231 C0.590512075,9.93330231 0.575008429,9.93347359 0.559529008,9.93303314 C0.545599951,9.93261717 0.542838364,9.92623072 0.551413818,9.91519513 C0.553763589,9.91216095 0.556791645,9.90956722 0.559722803,9.90702243 C0.807078631,9.69237895 0.965772982,9.41714983 1.0866772,9.11676641 C1.19139948,8.85658582 1.25547314,8.58573668 1.29541926,8.30798724 C1.33342741,8.04347561 1.34076742,7.77764265 1.32623275,7.51212779 C1.29958586,7.02538724 1.19663196,6.55660706 0.970012261,6.1214475 C0.880309134,5.94920908 0.771517143,5.79037976 0.633244,5.6534014 C0.473265752,5.49491464 0.289595996,5.38066813 0.0648415771,5.34523678 C0.0145516253,5.33730878 0.0175554567,5.33420119 0.0174343344,5.28538522 C0.01741011,5.27753062 0.0174343344,5.26972495 0.0174343344,5.26189482 L0.0174343344,0.0834863296 C0.0174343344,0.00342323559 0.0182821901,0.00171039434 0.0877579038,0.0356980586 C0.297032901,0.138052558 0.500179113,0.251785217 0.697051193,0.37679816 C1.01419765,0.578203822 1.31157696,0.805669141 1.58884998,1.06044204 C1.93557449,1.37900605 2.24431507,1.73089705 2.51335177,2.11856196 C2.70608147,2.39626247 2.87582217,2.68751889 3.02104773,2.99326105 C3.23373838,3.44104669 3.39221471,3.90740443 3.49373936,4.39370453 C3.53724647,4.60220625 3.5710638,4.81215165 3.59342296,5.02371201 C3.6084179,5.16543739 3.61861639,5.30775003 3.62237118,5.45060099 C3.62513276,5.55611201 3.6322063,5.66167197 3.62854841,5.76718299 C3.61934312,6.03465539 3.6029674,6.30136924 3.56481389,6.56685964 C3.50933991,6.95278724 3.42089645,7.33022404 3.29512312,7.69868067 C3.06780091,8.36480463 2.73742791,8.97433143 2.3063781,9.52836216 C2.21061886,9.65146651 2.10882773,9.76928552 2.00698816,9.88720241 C1.97813684,9.92057834 1.94749292,9.93499068 1.9021932,9.93447683 C1.68521483,9.93190756 1.46818801,9.93332677 1.25120964,9.93332677" id="Fill-3" fill="#FFFFFF" mask="url(#mask-2)"></path>
          </g>
        </g>
      </g>
    </symbol>

    <symbol id="hi-join" width="32px" height="32px" viewBox="0 0 480 480">
      <path d="m174.99999,177l-80.80644,-37l0,22.2l-86.19354,0l0,29.6l86.19354,0l0,22.2l80.80644,-37z"/>
      <path d="m400,164.1875l0,25.625c0,4.2435 -10.92,7.6875 -24.375,7.6875l-81.25,0c-13.455,0 -24.375,-3.444 -24.375,-7.6875l0,-25.625c0,-4.2435 10.92,-7.6875 24.375,-7.6875l81.25,0c13.455,0 24.375,3.444 24.375,7.6875z"/>
      <path d="m437.375,13l-201.74999,0c-18.49375,0 -33.625,25.36875 -33.625,56.375l0,338.24999c0,31.00625 15.13125,56.375 33.625,56.375l201.74999,0c18.49375,0 33.625,-25.36875 33.625,-56.375l0,-338.24999c0,-31.00625 -15.13125,-56.375 -33.625,-56.375zm0,394.62499l-201.74999,0l0,-338.24999l201.74999,0l0,338.24999z"/>
      <path d="m456.5,45.8125l0,54.37499c0,9.0045 -20.16,16.3125 -45,16.3125l-150,0c-24.84,0 -45,-7.308 -45,-16.3125l0,-54.37499c0,-9.0045 20.16,-16.3125 45,-16.3125l150,0c24.84,0 45,7.308 45,16.3125z"/>
      <path d="m400,251.6875l0,25.625c0,4.2435 -10.92,7.6875 -24.375,7.6875l-81.25,0c-13.455,0 -24.375,-3.444 -24.375,-7.6875l0,-25.625c0,-4.2435 10.92,-7.6875 24.375,-7.6875l81.25,0c13.455,0 24.375,3.444 24.375,7.6875z"/>
      <path d="m400,334.6875l0,25.625c0,4.2435 -10.92,7.6875 -24.375,7.6875l-81.25,0c-13.455,0 -24.375,-3.444 -24.375,-7.6875l0,-25.625c0,-4.2435 10.92,-7.6875 24.375,-7.6875l81.25,0c13.455,0 24.375,3.444 24.375,7.6875z"/>
      <path d="m174.99999,264l-80.80644,-37l0,22.2l-86.19354,0l0,29.6l86.19354,0l0,22.2l80.80644,-37z"/>
      <path d="m174.99999,348.5l-80.80644,-37l0,22.2l-86.19354,0l0,29.6l86.19354,0l0,22.2l80.80644,-37z"/>
    </symbol>

    <symbol id="hi-broadcast" viewBox="0 0 32 32">
      <path d="M12 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM20.761 7.204c3.12 1.692 5.239 4.997 5.239 8.796s-2.119 7.104-5.239 8.796c1.377-2.191 2.239-5.321 2.239-8.796s-0.862-6.605-2.239-8.796zM9 16c0 3.475 0.862 6.605 2.239 8.796-3.12-1.692-5.239-4.997-5.239-8.796s2.119-7.104 5.239-8.796c-1.377 2.191-2.239 5.321-2.239 8.796zM3 16c0 5.372 1.7 10.193 4.395 13.491-4.447-2.842-7.395-7.822-7.395-13.491s2.948-10.649 7.395-13.491c-2.695 3.298-4.395 8.119-4.395 13.491zM24.605 2.509c4.447 2.842 7.395 7.822 7.395 13.491s-2.948 10.649-7.395 13.491c2.695-3.298 4.395-8.119 4.395-13.491s-1.7-10.193-4.395-13.491z"></path>
    </symbol>

    <symbol id="hi-sigma" viewBox="0 0 32 32">
      <path d="M29.425 22.96l1.387-2.96h1.188l-2 12h-30v-2.32l10.361-12.225-10.361-10.361v-7.094h30.625l1.375 8h-1.074l-0.585-1.215c-1.104-2.293-1.934-2.785-4.341-2.785h-20.688l11.033 11.033-9.294 10.967h16.949c3.625 0 4.583-1.299 5.425-3.040z"></path>
    </symbol>
    <symbol id="hi-sigma-stream" viewBox="0 0 32 32">
      <g>
        <path d="m24.29172,19.54425l1.13561,-2.50675l0.97268,0l-1.6375,10.1625l-24.5625,0l0,-1.96475l8.48307,-10.35304l-8.48307,-8.77447l0,-6.00773l25.07422,0l1.12578,6.775l-0.87933,0l-0.47897,-1.02896c-0.9039,-1.94189 -1.58346,-2.35854 -3.55419,-2.35854l-16.9383,0l9.03327,9.34357l-7.60946,9.28768l13.87699,0c2.96797,0 3.75233,-1.10009 4.44172,-2.5745l-0.00001,-0.00001z"/>
      </g>
      <g>
       <path d="m30.15,17l-12.10001,0c-0.91094,0 -1.65,0.69107 -1.65,1.54285l0,11.31428c0,0.85179 0.73906,1.54285 1.65,1.54285l12.10001,0c0.91094,0 1.65,-0.69107 1.65,-1.54285l0,-11.31428c0,-0.85179 -0.73906,-1.54285 -1.65,-1.54285z" fill="white"/>
      </g>
      <g transform="translate(4 4) scale(0.05 0.05)">
       <path d="m255.68435,333.84284l254.39374,0c5.40587,0 9.78438,-4.52295 9.78438,-10.10714l0,-40.42857c0,-5.5842 -4.37851,-10.10714 -9.78438,-10.10714l-254.39374,0c-5.40587,0 -9.78438,4.52295 -9.78438,10.10714l0,40.42857c0,5.5842 4.37851,10.10714 9.78438,10.10714zm293.53124,50.53571l-254.39374,0c-5.40587,0 -9.78438,4.52295 -9.78438,10.10714l0,40.42857c0,5.5842 4.37851,10.10714 9.78438,10.10714l254.39374,0c5.40587,0 9.78438,-4.52295 9.78438,-10.10714l0,-40.42857c0,-5.5842 -4.37851,-10.10714 -9.78438,-10.10714zm-39.1375,111.17856l-254.39374,0c-5.40587,0 -9.78438,4.52295 -9.78438,10.10714l0,40.42857c0,5.5842 4.37851,10.10714 9.78438,10.10714l254.39374,0c5.40587,0 9.78438,-4.52295 9.78438,-10.10714l0,-40.42857c0,-5.5842 -4.37851,-10.10714 -9.78438,-10.10714z"/>
      </g>
    </symbol>
    <symbol id="hi-unnest" viewBox="0 0 32 32">
      <path d="m30,8l2,0l0,16l-2,0l0,-16z"/>
      <path d="m7,14l22,0l0,4l-22,0l0,5l-7,-7l7,-7l0,5z"/>
    </symbol>
    <symbol id="hi-loop" viewBox="0 0 24 24">
      <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/><path d="M0 0h24v24H0z" fill="none"/>
    </symbol>
    <symbol id="hi-nested-loop" viewBox="0 0 32 32">
       <path d="m27.8,10.1l-19.5,0l0,6l-7.8,-8l7.8,-8l0,6l23.4,0l0,12l-3.9,0l0,-8zm-23.4,12l19.5,0l0,-6l7.8,8l-7.8,8l0,-6l-23.4,0l0,-12l3.9,0l0,8z"/>
    </symbol>
    <symbol id="hi-full-screen" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
    </symbol>
    <symbol id="hi-vertical-align" viewBox="0 0 24 24">
      <path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/>
    </symbol>
    <symbol id="hi-sort" viewBox="0 0 24 24">
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
    </symbol>
    <symbol id="hi-map" viewBox="0 0 24 24">
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
    </symbol>
    <symbol id="hi-filter" viewBox="0 0 24 24">
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    </symbol>
    <symbol id="hi-timeline" viewBox="0 0 24 24">
      <defs><path id="a" d="M0 0h24v24H0V0z"/></defs>
      <clipPath id="b"><use xlink:href="#a" overflow="visible"/>
      </clipPath>
      <path clip-path="url(#b)" d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"/>
    </symbol>
    <symbol id="hi-merge" viewBox="0 0 24 24">
      <path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>
    </symbol>
    <symbol id="hi-crop-free" viewBox="0 0 24 24">
      <path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2zm2 10H3v4c0 1.1.9 2 2 2h4v-2H5v-4zm14 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zm0-16h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/>
    </symbol>
    <symbol id="hi-bar-chart" viewBox="0 0 24 24">
      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/><path fill="none" d="M0 0h24v24H0z"/>
    </symbol>
    <symbol id="hi-access-time" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </symbol>
    <symbol id="hi-sitemap" viewBox="0 0 640 512">
      <path d="M128 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-24-80h192v48h48v-48h192v48h48v-57.59c0-21.17-17.23-38.41-38.41-38.41H344v-64h40c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h40v64H94.41C73.23 224 56 241.23 56 262.41V320h48v-48zm264 80h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm240 0h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"></path>
    </symbol>
    <symbol id="hi-random" viewBox="0 0 512 512">
      <path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z"></path>
    </symbol>
    <symbol id="hi-exchange" viewBox="0 0 512 512">
      <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
    </symbol>
    <symbol id="hi-table" viewBox="0 0 512 512">
      <path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z"></path>
    </symbol>
    <symbol id="hi-copy" viewBox="0 0 512 512">
      <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
    </symbol>
    <symbol id="hi-microchip" viewBox="0 0 1024 1024">
      <path d="M682.67 307.2h-341.34c-18.852 0-34.13 15.281-34.13 34.13v341.34c0 18.852 15.28 34.13 34.13 34.13h341.34c18.852 0 34.13-15.28 34.13-34.13v-341.34c0-18.851-15.28-34.13-34.13-34.13z" fill="" />
      <path d="M921.606 546.133c18.85 0 34.127-15.282 34.127-34.133 0-18.855-15.279-34.133-34.127-34.133h-68.273v-102.4h68.273c18.85 0 34.127-15.282 34.127-34.133 0-18.855-15.279-34.133-34.127-34.133h-68.273v-68.267c0-37.706-30.564-68.267-68.267-68.267h-68.267v-68.273c0-18.85-15.282-34.127-34.133-34.127-18.855 0-34.133 15.279-34.133 34.127v68.273h-102.4v-68.273c0-18.85-15.282-34.127-34.133-34.127-18.855 0-34.133 15.279-34.133 34.127v68.273h-102.4v-68.273c0-18.85-15.282-34.127-34.133-34.127-18.855 0-34.133 15.279-34.133 34.127v68.273h-68.267c-37.706 0-68.267 30.564-68.267 68.267v68.267h-68.273c-18.85 0-34.127 15.282-34.127 34.133 0 18.855 15.279 34.133 34.127 34.133h68.273v102.4h-68.273c-18.85 0-34.127 15.282-34.127 34.133 0 18.855 15.279 34.133 34.127 34.133h68.273v102.4h-68.273c-18.85 0-34.127 15.282-34.127 34.133 0 18.855 15.279 34.133 34.127 34.133h68.273v68.267c0 37.706 30.564 68.267 68.267 68.267h68.267v68.273c0 18.85 15.282 34.127 34.133 34.127 18.855 0 34.133-15.279 34.133-34.127v-68.273h102.4v68.273c0 18.85 15.282 34.127 34.133 34.127 18.855 0 34.133-15.279 34.133-34.127v-68.273h102.4v68.273c0 18.85 15.282 34.127 34.133 34.127 18.855 0 34.133-15.279 34.133-34.127v-68.273h68.267c37.706 0 68.267-30.564 68.267-68.267v-68.267h68.273c18.85 0 34.127-15.282 34.127-34.133 0-18.855-15.279-34.133-34.127-34.133h-68.273v-102.4h68.273zM785.067 785.067h-511.996c-18.853 0-34.138-15.284-34.138-34.138v-511.996h511.996c18.854 0 34.138 15.284 34.138 34.138v511.996z" fill="" />
    </symbol>
    <symbol id="hi-heart" viewBox="0 0 1024 1024">
      <path d="M886.250667 552.490667 512 927.957333l-374.229333-375.466667C79.786667 505.429333 42.666667 433.536 42.666667 352.896 42.666667 211.029333 157.290667 96.042667 298.666667 96.042667c89.088 0 167.488 45.717333 213.333333 114.986667 45.845333-69.269333 124.245333-114.986667 213.333333-114.986667 141.376 0 256 114.986667 256 256.832C981.333333 433.536 944.213333 505.429333 886.250667 552.490667zM832.341333 458.858667l-138.858667 0-53.888-197.610667-20.586667 5.610667-20.117333-7.104-93.226667 317.034667-101.077333-252.672-20.245333 6.741333-19.989333-7.509333-50.794667 135.509333L192.341333 458.858667l0 42.666667 128 0 19.989333 7.509333 44.672-119.168 107.114667 267.754667 40.469333-13.504-3.477333-8.661333 3.349333 1.173333 85.76-291.562667 44.202667 162.090667 20.586667-5.610667 149.333333 0L832.341333 458.858667z" />
    </symbol>
    <defs>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="0" dy="0" result="offsetBlur"/> <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/> <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>
    </defs>
  </svg>

  <script type="text/html" id="app-switcher-icon-template">
    <svg class="hi app-img">
      <!-- ko if: img == 'hi-as-navopt' --><use xlink:href="#hi-as-navopt"></use><!-- /ko -->
      <!-- ko if: img == 'hi-as-cdsw' --><use xlink:href="#hi-as-cdsw"></use><!-- /ko -->
      <!-- ko if: img == 'hi-as-cm' --><use xlink:href="#hi-as-cm"></use><!-- /ko -->
      <!-- ko if: img == 'hi-as-nav' --><use xlink:href="#hi-as-nav"></use><!-- /ko -->
      <!-- ko if: img == 'hi-as-hue' --><use xlink:href="#hi-as-hue"></use><!-- /ko -->
    </svg>
  </script>

  <script type="text/html" id="document-icon-template">
    <svg class="hi" data-bind="with: document">
      <!-- ko if: isDirectory -->
      <use xlink:href="#hi-folder"></use>
      <!-- /ko -->
      <!-- ko ifnot: isDirectory -->
      <!-- ko switch: definition().type -->
      <!-- ko case: 'link-pigscript' --><use xlink:href="#hi-file-pig"></use><!-- /ko -->
      <!-- ko case: 'link-workflow' --><use xlink:href="#hi-file-job-designer"></use><!-- /ko -->
      <!-- ko case: 'notebook' --><use xlink:href="#hi-file-notebook"></use><!-- /ko -->
      <!-- ko case: 'oozie-bundle2' --><use xlink:href="#hi-file-oozie-bundle"></use><!-- /ko -->
      <!-- ko case: 'oozie-coordinator2' --><use xlink:href="#hi-file-oozie-coordinator"></use><!-- /ko -->
      <!-- ko case: 'oozie-workflow2' --><use xlink:href="#hi-file-oozie-workflow"></use><!-- /ko -->
      <!-- ko case: 'query-hive' --><use xlink:href="#hi-file-hive"></use><!-- /ko -->
      <!-- ko case: 'query-impala' --><use xlink:href="#hi-file-impala"></use><!-- /ko -->
      <!-- ko case: 'search-dashboard' --><use xlink:href="#hi-file-search"></use><!-- /ko -->
      <!-- ko case: $default --><use xlink:href="#hi-file"></use><!-- /ko -->
      <!-- /ko -->
      <!-- /ko -->
      <!-- ko if: $parent.showShareAddon && (isShared() || isSharedWithMe()) && selected() -->
      <use xlink:href="#hi-share-addon-selected"></use>
      <!-- /ko -->
      <!-- ko if: $parent.showShareAddon && (isShared() || isSharedWithMe()) && !selected() -->
      <use xlink:href="#hi-share-addon"></use>
      <!-- /ko -->
    </svg>
  </script>

  <script type="text/html" id="app-icon-template">
    <!-- ko switch: icon -->
    <!-- ko case: 'dashboard' --><svg class="hi hi-fw"><use xlink:href="#hi-dashboard"></use></svg><!-- /ko -->
    <!-- ko case: 'documents' --><svg class="hi hi-fw"><use xlink:href="#hi-documents"></use></svg><!-- /ko -->
    <!-- ko case: 'report' --><i class="fa fa-fw fa-area-chart"></i><!-- /ko -->
    <!-- ko case: 'dist-cp' --><i class="fa fa-fw fa-files-o"></i><!-- /ko -->
    <!-- ko case: 'editor' --><i class="altus-icon altus-sql-editor"></i><!-- /ko -->
    <!-- ko case: 'hbase' --><svg class="hi hi-fw"><use xlink:href="#hi-hbase"></use></svg><!-- /ko -->
    <!-- ko case: 'hdfs' --><i class="fa fa-fw fa-folder-o"></i><!-- /ko -->
    <!-- ko case: 'hive' --><svg class="hi hi-fw"><use xlink:href="#hi-hive"></use></svg><!-- /ko -->
    <!-- ko case: 'impala' --><svg class="hi hi-fw"><use xlink:href="#hi-impala"></use></svg><!-- /ko -->
    <!-- ko case: 'indexes' --><i class="fa fa-fw fa-search-plus"></i><!-- /ko -->
    <!-- ko case: 'jar' --><svg class="hi hi-fw"><use xlink:href="#hi-spark"></use></svg><!-- /ko -->
    <!-- ko case: 'java' --><i class="fa fa-fw fa-file-code-o"></i><!-- /ko -->
    <!-- ko case: 'job-designer' --><svg class="hi hi-fw"><use xlink:href="#hi-job-designer"></use></svg><!-- /ko -->
    <!-- ko case: 'mapreduce' --><i class="fa fa-fw fa-file-archive-o"></i><!-- /ko -->
    <!-- ko case: 'markdown' --><svg class="hi hi-fw"><use xlink:href="#hi-markdown"></use></svg><!-- /ko -->
    <!-- ko case: 'notebook' --><svg class="hi hi-fw"><use xlink:href="#hi-file-notebook"></use></svg><!-- /ko -->
    <!-- ko case: 'oozie' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie"></use></svg><!-- /ko -->
    <!-- ko case: 'oozie-bundle' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie-bundle"></use></svg><!-- /ko -->
    <!-- ko case: 'oozie-coordinator' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie-coordinator"></use></svg><!-- /ko -->
    <!-- ko case: 'oozie-workflow' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie-workflow"></use></svg><!-- /ko -->
    <!-- ko case: 'pig' --><svg class="hi hi-fw"><use xlink:href="#hi-pig"></use></svg><!-- /ko -->
    <!-- ko case: 'py' --><svg class="hi hi-fw"><use xlink:href="#hi-py"></use></svg><!-- /ko -->
    <!-- ko case: 'pyspark' --><svg class="hi hi-fw"><use xlink:href="#hi-spark"></use></svg><!-- /ko -->
    <!-- ko case: 'r' --><svg class="hi hi-fw"><use xlink:href="#hi-r"></use></svg><!-- /ko -->
    <!-- ko case: 'scala' --><svg class="hi hi-fw"><use xlink:href="#hi-scala"></use></svg><!-- /ko -->
    <!-- ko case: 'solr' --><i class="fa fa-fw fa-search-plus"></i><!-- /ko -->
    <!-- ko case: 'scheduler' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie"></use></svg><!-- /ko -->
    <!-- ko case: 'security' --><i class="fa fa-fw fa-lock"></i><!-- /ko -->
    <!-- ko case: 'shell' --><i class="fa fa-fw fa-terminal"></i><!-- /ko -->
    <!-- ko case: 'spark' --><svg class="hi hi-fw"><use xlink:href="#hi-spark"></use></svg><!-- /ko -->
    <!-- ko case: 'spark2' --><svg class="hi hi-fw"><use xlink:href="#hi-spark"></use></svg><!-- /ko -->
    <!-- ko case: 'sqoop' --><svg class="hi hi-fw"><use xlink:href="#hi-sqoop"></use></svg><!-- /ko -->
    <!-- ko case: 'sqoop1' --><svg class="hi hi-fw"><use xlink:href="#hi-sqoop"></use></svg><!-- /ko -->
    <!-- ko case: 'tables' --><i class="fa fa-fw fa-table"></i><!-- /ko -->
    <!-- ko case: 'text' --><i class="fa fa-fw fa-i-cursor"></i><!-- /ko -->
    <!-- ko case: 'yarn' --><svg class="hi hi-fw"><use xlink:href="#hi-job-designer"></use></svg><!-- /ko -->
    <!-- ko case: 'warehouses' --><i class="altus-icon altus-adb-cluster"></i><!-- /ko -->
    <!-- ko case: 'workflows' --><svg class="hi hi-fw"><use xlink:href="#hi-oozie"></use></svg><!-- /ko -->
    <!-- ko case: $else --><i class="fa fa-fw fa-database"></i><!-- /ko -->
    <!-- /ko -->
  </script>








<div id="jHueNotify" class="alert alert-dismissible alert-warning hide">
  <button type="button" class="close" data-dismiss="alert">
    <span aria-hidden="true">&times;</span>
    <span class="sr-only">Close</span>
  </button>
  <p class="message"></p>
</div>


<link rel="stylesheet" href="/static/desktop/css/login.abf62a6dd176.css">
<link rel="stylesheet" href="/static/desktop/css/login4.daf915afd2b2.css">

<style type="text/css">
  body {
    background-color: #F8F8F8;
    padding-top: 150px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    background-color: #0B7FAD;
    height: 6px;
    width: 100%;
  }

  select {
    width: 100%;
  }
</style>

<div class="login-container">

  <form method="POST" action="/hue/accounts/login" autocomplete="off">
    <input type='hidden' name='csrfmiddlewaretoken' value='eU1qwGqGnHzWERymyJIpzU5t69imPPgsuTeisJcATK0LUvITTccAhXfvQBp1tR4D' />

    <div class="logo">
      <svg style="height: 80px; width: 200px;"><use xlink:href="#hi-logo"></use></svg>
    </div>
    <h3>Query. Explore. Repeat.</h3>



    <div class="text-input
    ">
      <input type="text" name="username" autocomplete="off" maxlength="30" autofocus="autofocus" required placeholder="Username" id="id_username" />
    </div>

    

    <div class="text-input
    ">
      <input type="password" name="password" autocomplete="off" required placeholder="Password" id="id_password" />
    </div>

    




      <input type="submit" class="btn btn-primary" value="Sign In"/>
    <input type="hidden" name="next" value="/desktop/globalJsConstants.js?v=4.4.0"/>

  </form>

</div>


<div class="trademark center muted">
  Hue and the Hue logo are trademarks of Cloudera, Inc.
</div>

<script>
  $(document).ready(function () {
    $("form").on("submit", function () {
      window.setTimeout(function () {
        $(".logo").find("img").addClass("waiting");
      }, 1000);
    });



      var $redirect = $('input[name="next"]');
      $redirect.val($redirect.val() + window.location.hash);
  });
</script>






<iframe id="zoomDetectFrame" style="width: 250px; display: none" ></iframe>



<div id="progressStatus" class="uploadstatus well hide">
  <h4>Upload progress</h4>
  <div id="progressStatusBar" class="hide progress">
    <div class="bar bar-upload"></div>
  </div>
  <div id="progressStatusContent" class="scrollable-uploadstatus">
    <div class="updateStatus"> </div>
  </div>
</div>

<div id="chooseFile" class="modal hide fade" style="z-index: 10000;" tabindex="-1">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h2 class="modal-title">Choose a file</h2>
  </div>
  <div class="modal-body">
    <div id="filechooser"></div>
  </div>
  <div class="modal-footer"></div>
</div>

<div id="rowDetailsModal" class="modal transparent-modal hide" data-backdrop="true" style="width:90%;margin-left:-45%!important;z-index:1071">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <input class="input-medium hue-modal-search" type="text" placeholder="Search...">
    <h2 class="modal-title">Row details</h2>
  </div>
  <div class="modal-body">
    <table class="table table-condensed">

    </table>
  </div>
</div>

<script type="text/javascript">

  $(document).ready(function () {

    if (window.performance && window.performance.navigation && window.performance.navigation.type === 1) {
      hueAnalytics.convert('hue', 'pageReloaded' + window.location.pathname);
    }

    var multiLineHandlers = [];

    huePubSub.subscribe('table.row.show.details', function (data) {
      var $el = $(data.table);
      var $t = $('#rowDetailsModal').find('table');
      $t.html('');
      var html = '';
      multiLineHandlers = [];
      $el.find('thead th').each(function (colIdx, col) {
        if (colIdx > 0) {
          var value = '';
          if ($el.hasClass('old-datatable')) {
            value = $el.dataTable().fnGetData(data.idx, colIdx);
          }
          else {
            value = $el.data('data')[data.idx][colIdx];
          }
          var link = typeof value == 'string' && value.match(/^https?:\/\//i) ? '<a href="' + hueUtils.escapeOutput(value) + '" target="_blank">' + value + ' <i class="fa fa-external-link"></i></a>' : value;
          html += '<tr><th width="10%" title="' + $(col).attr("title") + '">' + hueUtils.deXSS($(col).text()) + '</th><td class="multi-line-ellipsis" style="word-break: break-all"><div style="position: relative">' + $('<span>').text(hueUtils.deXSS(link)).html() + '</div></td></tr>';
        }
      });
      html += '<tr class="hide no-results"><td class="muted" colspan="2">Your search did not return any result.</td></tr>';
      $t.html(html);
      $t.find('.multi-line-ellipsis div').each(function(cnt, el){
        multiLineHandlers.push(new MultiLineEllipsisHandler({
          element: el,
          text: el.textContent,
          overflowHeight: 48,
          expandable: true
        }));
      });
      $('#rowDetailsModal').modal('show');
    });

    $('#rowDetailsModal').on('shown', function () {
      $('.modal-backdrop').css('z-index', '1070');
      $('#rowDetailsModal .modal-body').scrollTop(0);
      $('#rowDetailsModal .modal-body').scrollLeft(0);
    });

    $('#rowDetailsModal').on('hidden', function () {
      multiLineHandlers.forEach(function (multiLineEllipsisHandler) {
        multiLineEllipsisHandler.dispose();
      });
    });

    $('#rowDetailsModal .hue-modal-search').jHueDelayedInput(function () {
      var $t = $('#rowDetailsModal').find('table');
      $('#rowDetailsModal .no-results').addClass('hide');
      $t.find('tr').removeClass('hide');
      var shown = 0;
      $t.find('tr').each(function () {
        if ($(this).text().toLowerCase().indexOf($('#rowDetailsModal .hue-modal-search').val().toLowerCase()) == -1) {
          $(this).addClass('hide');
        }
        else {
          shown++;
        }
      });
      if (shown === 0) {
        $('#rowDetailsModal .no-results').removeClass('hide');
      }
    });

    if ($.fn.editableform) {
      $.fn.editableform.buttons =
          '<button type="submit" class="btn btn-primary editable-submit disable-feedback">' +
          '<i class="fa fa-fw fa-check"></i>' +
          '</button>' +
          '<button type="button" class="btn btn-default editable-cancel">' +
          '<i class="fa fa-fw fa-times"></i>' +
          '</button>';
    }

    $(document).on("info", function (e, msg) {
      $.jHueNotify.info(msg);
    });
    $(document).on("warn", function (e, msg) {
      $.jHueNotify.warn(msg);
    });
    $(document).on("error", function (e, msg) {
      $.jHueNotify.error(msg);
    });

    $($('#zoomDetectFrame')[0].contentWindow).resize(function () {
      $(window).trigger('zoom');
    });


    // global catch for ajax calls after the user has logged out
    var isLoginRequired = false;
    $(document).ajaxComplete(function (event, xhr, settings) {
      if (xhr.responseText === '/* login required */') {
        var isAutoLogout = settings.url == '/desktop/debug/is_idle';
        $('.blurred').removeClass('blurred');

        if ($('#login-modal').length > 0 && $('#login-modal').is(':hidden')) {
          $('#login-modal .link-message').hide();
          if (isAutoLogout) {
            $(HUE_CONTAINER).children(':not(#login-modal)').addClass('blurred');
            $('#login-modal .auto-logged-out').show();
            $('#login-modal').modal({
              backdrop: 'static',
              keyboard: false
            });
          }
          else {
            $('#login-modal .logged-out').show();
            $('#login-modal').modal({
              backdrop: false,
              keyboard: true
            });
          }
          window.setTimeout(function () {
            $('.jHueNotify').remove();
          }, 200);
        }
      }
    });

    $('#login-modal').on('hidden', function () {
      isLoginRequired = false;
      $('.blurred').removeClass('blurred');
    });

    huePubSub.subscribe('hue.login.result', function (response) {
      if (response.auth) {
        if ($('#login-modal #id_username').val() !== LOGGED_USERNAME) { //LOGGED_USERNAME is in common_header
          location.reload();
        }
        else {
          $('#login-modal').modal('hide');
          $.jHueNotify.info('You have signed in successfully!');
          $('#login-modal .login-error').addClass('hide');
        }
      }
      else {
        $('#login-modal .login-error').removeClass('hide');
      }
    });

    $("div.navigator ul.dropdown-menu").css("maxHeight", $(window).height() - 50);
    var scrollableDropdownTimeout = -1;
    $(window).on("resize", function () {
      window.clearTimeout(scrollableDropdownTimeout);
      scrollableDropdownTimeout = window.setTimeout(function () {
        $("div.navigator ul.dropdown-menu").css("maxHeight", $(window).height() - 50);
      }, 500);
    });

    $(".dataTables_wrapper").jHueTableScroller();
    var resetTimeout = -1;
    var pendingRequestsInterval = -1;

    // sets feedback on every primary and danger action across Hue
    // can be disabled adding the class "disable-feedback" to the button
    $(document).on("click", ".btn-primary:not(.disable-feedback), .btn-danger:not(.disable-feedback)", function () {
      if (!$(this).hasClass('disabled')) {
        var text = ($(this).text() != "") ? $(this).text() : $(this).val();
        $(this).attr("data-loading-text", text + " ...");
        $(this).button("loading");
        startPendingRequestsPolling();
        resetTimeout = window.setTimeout(function () {
          resetPrimaryButtonsStatus();
        }, 200);
      }
    });

    $(document).on("hidden", ".modal", function () {
      resetPrimaryButtonsStatus();
    });

    $(window).on('beforeunload', function () {
      window.clearInterval(pendingRequestsInterval);
      window.clearTimeout(resetTimeout);
    });

    $(document).on("submit", "form", function () {
      hasAjaxBeenSent = false;
      window.setInterval(function () {
        window.clearTimeout(resetTimeout);
      }, 10);
    });

    var hasAjaxBeenSent = false;
    $(document).ajaxSend(function () {
      hasAjaxBeenSent = true;
    });

    function startPendingRequestsPolling() {
      pendingRequestsInterval = window.setInterval(function () {
        if (hasAjaxBeenSent) {
          var activeRequests = 0;
          if (jQuery.ajax.active) {
            activeRequests = jQuery.ajax.active;
          }
          else {
            activeRequests = jQuery.active;
          }
          if (activeRequests == 0) {
            resetPrimaryButtonsStatus();
            window.clearInterval(pendingRequestsInterval);
          }
        }
        else {
          window.clearInterval(pendingRequestsInterval);
        }
      }, 200);
    }

    var pageWidth = $(window).width();
    if ($('.page-content').length > 0) {
      pageWidth = $('.page-content').width();
    }
    else if ($('.content-panel').length > 0) {
      pageWidth = $('.content-panel').width();
      document.styleSheets[0].addRule('.form-actions','margin-left: -11px !important');
    }

    document.styleSheets[0].addRule('.form-actions','width: ' + pageWidth + 'px');
  });

  function resetPrimaryButtonsStatus() {
    $(".btn-primary:not(.disable-feedback), .btn-danger:not(.disable-feedback)").button("reset");
  }

  var _catchEnterKeyOnModals = false;

  $(document).on("shown", ".modal", function () {
    _catchEnterKeyOnModals = true;
    // safe ux enhancement: focus on the first editable input
    $(".modal:visible").find('input:not(.disable-autofocus):visible:first').not($('.jHueFilechooserActions input')).focus();
  });

  $(document).on("hidden", ".modal", function () {
    _catchEnterKeyOnModals = false;
  });

  $(document).on("keyup", function (e) {
    var _code = (e.keyCode ? e.keyCode : e.which);
    if (_catchEnterKeyOnModals && $(".modal").is(":visible") && _code == 13) {
      var _currentModal = $(".modal:visible");
      if (!$('.jHueAutocompleteElement').is(':focus')) {
        if (_currentModal.find(".btn-primary:not(.disable-enter)").length > 0) {
          _currentModal.find(".btn-primary:not(.disable-enter)").click();
        }
        else if (_currentModal.find(".btn-danger:not(.disable-enter)").length > 0) {
          _currentModal.find(".btn-danger:not(.disable-enter)").click();
        }
      }
    }
  });

  if (typeof nv != "undefined") {
    // hides all the nvd3 logs
    nv.log = function () {
    };
  }



</script>


  </body>
</html>

