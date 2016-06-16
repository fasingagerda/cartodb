<div class="Editor-ListLayer-dragIcon">
  <div class="CDB-Shape">
    <div class="CDB-Shape-rectsHandle is-small">
      <div class="CDB-Shape-rectsHandleItem CDB-Shape-rectsHandleItem--grey is-first"></div>
      <div class="CDB-Shape-rectsHandleItem CDB-Shape-rectsHandleItem--grey is-second"></div>
      <div class="CDB-Shape-rectsHandleItem CDB-Shape-rectsHandleItem--grey is-third"></div>
    </div>
  </div>
</div>
<div class="Editor-ListLayer-itemHeader js-thumbnail">
  <div class="Editor-ListLayer-media u-rSpace--m" style="background: <%- color %>; color: #fff">
    <p class="CDB-Text CDB-Size-large is-semibold u-upperCase"><%- letter %></p>
  </div>
  <div class="Editor-ListLayer-inner">
    <div class="Editor-ListLayer-title">
      <h2 class="Editor-ListLayer-titleText CDB-Text CDB-Size-large u-ellipsis js-title"><%- title %></h2>
      <ul class="Editor-HeaderInfo-actions">
        <li class="Editor-HeaderInfo-actionsItem CDB-Shape">
          <div class="CDB-ArrowToogle is-blue is-small"></div>
        </li>
        <li class="Editor-HeaderInfo-actionsItem CDB-Shape">
          <button class="CDB-Shape-threePoints is-blue is-small js-toggle-menu">
            <div class="CDB-Shape-threePointsItem"></div>
            <div class="CDB-Shape-threePointsItem"></div>
            <div class="CDB-Shape-threePointsItem"></div>
          </button>
        </li>
      </ul>
    </div>
    <div class="u-flex u-justifySpace">
      <button class="CDB-Text CDB-Size-small u-actionTextColor u-upperCase js-add-analysis" data-layer-id="<%- layerId %>">
        <%- _t('editor.layers.layer.add-analysis') %>
      </button>
      <% if (isCollapsed && numberOfAnalyses > 0) { %>
        <p class="CDB-Text CDB-Size-small u-secondaryTextColor">
          <%- _t('editor.layers.layer.analyses-count', { smart_count: numberOfAnalyses }) %>
        </p>
      <% } %>
    </div>
  </div>
</div>
<ul class="Editor-ListAnalysis js-analyses <%- isCollapsed ? 'is-hidden' : '' %>"></ul>
