<?php (function(){ ob_start(); ?>
 <article class="column-1x side-navigation av-padding-around-1x" >
      <span class="close-btn">+</span>
      <div class="container">
            <section>
                <figure>
                <img src="Media/images/mhilogos.png" alt="">
            </figure>
            </section>
            
            <section >
                    <h4>Navigation</h4>
                    <ul>
                    <a href="/"><li>Home</li></a>
                        <a href="/about"><li>About Us</li></a>
                        <a href="/faq"><li>FAQ</li></a>
                        <a href="/volunteer"><li>Volunteer</li></a>
                        <a href="/contact"><li>Contact Us</li></a>
                     </ul>
            </section>
            <section >
                    <h4>Contact Us</h4>
                     <ul>
                        <a><li>18680 NE 2nd Ave</li></a>
                        <a><li>Miami, Fl, 33179</li></a>
                        <a><li>info@ourmhi.org</li></a>
                        <a><li>ourmhi.org</li></a>
                     </ul>
            </section>
        </div>
    </article>
    
 <?php echo ob_get_clean(); })(); ?>