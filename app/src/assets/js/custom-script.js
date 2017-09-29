/** ******************************************************
 *
 * Custom Javascript code for AppStrap Bootstrap theme
 * Written by Themelize.me (http://themelize.me)
 *
 ****************************************************** */
(function ($) {
  $.extend($.fn, {

    // ===============================================================
    // AppStrap Javascript API
    // ===============================================================
    // @callbacks:
    // 1. themePreload: Before any AppStrap Javascript has run
    // 2. themePrePlugins: Before any AppStrap Javascript has run
    // 3. themeLoaded: After the theme has loaded everything
    //
    // arguments:
    // context = the dom in context
    // refresh = true if ajax content, false if default page load
    // ===============================================================
    themePreload(context, refresh) {
      // alert('themePreload');
    },
    themePrePlugins(context, refresh) {
      // alert('themePrePlugins');
    },
    themeLoaded(context, refresh) {
      // alert('themeLoaded');
      if (!refresh) {
        // Use any standard jQuery code to alter page:
        // $('.header-brand-text').html('test 1-2-3');
      }
    },

    // ===============================================================
    // @group: Override default plugins OR add new plugins
    // ===============================================================
    themePluginsCustom(context) {
      // Plugin functions
      // name pattern themePluginPLUGINNAME
      // items: PLUGINNAMEs
      //
      // Used to override the themePluginsDefault plugins list in script.js
      // To see all default plugin functions use:
      // var plugins = $.fn.themePlugins(false);
      // console.log(plugins);
      //
      // OR to define your own plugins
      // ----------------------------------------------------------------
      // return {
      //  themePluginFakeLoader: function() {
      //    // override default themePluginFakeLoader function
      //  },
      //
      //  themePluginMyPlugin: function() {
      //    // My custom plugin load
      //    var $triggerElements = context.find('[data-toggle=SOMETHING]');
      //    if ($triggerElements.length > 0) {
      //      var themePluginMyPluginInit = function() {
      //        // Init the plugin, called when Javascript & CSS are loaded
      //      };
      //      $document.themeLoadPlugin(["PLUGIN-JAVSCRIPT-COMMA-SEPARATED"], ["PLUGIN-CSS-COMMA-SEPARATED"], themePluginMyPluginInit);
      //    }
      //  }
      // }; // end of plugins object
    },
  });
}(jQuery));

