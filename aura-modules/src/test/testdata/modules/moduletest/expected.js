define('modules/moduletest', ['x/test', 'lwc'], function (_xTest, lwc) {

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        c: api_custom_element
      } = $api;
      return [api_custom_element("x-test", _xTest, {
        key: 2
      }, [api_dynamic($cmp.test)])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "modules-moduletest_moduletest-host",
      shadowAttribute: "modules-moduletest_moduletest"
    };

    class Test extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.stringQuote = 'str"ing';
        this.stringDoubleQuote = "str'ing";
        this.stringBacktick = `key=${"test tick"}`;
        this.VALID_NAME_RE = /^([a-zA-Z]\w*):([a-zA-Z]\w*)$/;
      }

    }

    lwc.registerDecorators(Test, {
      publicProps: {
        stringQuote: {
          config: 0
        },
        stringDoubleQuote: {
          config: 0
        },
        stringBacktick: {
          config: 0
        },
        VALID_NAME_RE: {
          config: 0
        }
      }
    });

    var moduletest = lwc.registerComponent(Test, {
      tmpl: _tmpl
    });

    return moduletest;

});
