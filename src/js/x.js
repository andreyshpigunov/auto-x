//
//  _auto.js
//  auto
//
//  Created by andreyshpigunov on 25.05.2021.
//
//  CSS & JS small library for using at the heart of the website
//


import { hover }     from "../components/auto-x/hover";
import { lazyload }  from "../components/auto-x/lazyload";
import { animate }   from "../components/auto-x/animate";
import { appear }    from "../components/auto-x/appear";
import { loadmore }  from "../components/auto-x/loadmore";
import { device }    from "../components/auto-x/device";
import { modal }     from "../components/auto-x/modal";
import { sheets }    from "../components/auto-x/sheets";
import { scroll }    from "../components/auto-x/scroll";
import { lib }       from "../components/auto-x/lib";
import { form }      from "../components/auto-x/form";
import { slider }    from "../components/auto-x/slider";
import { sticky }    from "../components/auto-x/sticky";


class X {
    
    constructor() {
        this.modal    = modal;
        this.animate  = animate;
        this.appear   = appear;
        this.lazyload = lazyload;
        this.loadmore = loadmore;
        this.sheets   = sheets;
        this.scroll   = scroll;
        this.hover    = hover;
        this.device   = device;
        this.lib      = lib;
        this.form     = form;
        this.sticky   = sticky;
        this.slider   = slider;
        
        this.initialized = false;
    }
    
    init() {
        if (!this.initialized) {
            this.modal.init();
            this.animate.init();
            this.appear.init();
            this.lazyload.init();
            this.loadmore.init();
            this.sheets.init();
            this.scroll.init();
            this.sticky.init();
            this.slider.init();
            hover();
            
            this.initialized = true;
        }
    }
};

export const x = new X();
window.x = x;

// Query selectors shorthands
window.qs  = x.lib.qs;
window.qsa = x.lib.qsa;
