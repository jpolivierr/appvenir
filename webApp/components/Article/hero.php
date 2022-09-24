<?php (function(){ ob_start(); ?>
 <article id="hero" class="av-article-v2 hero sp av-padding-4x bk-main av-padding-flush-bottom">
        <div class="container">
            <section >
                    <h1 style="margin: 0px;">FULL STACK</h1>
                    <h2 style="font-size: 45px;">SOFTWARE ENGINEER</h2>
                    <p style="margin-bottom: 3rem; max-width:480px;">We are a nonprofit organization dedicated to provide not only an educational pathways for the youth in Haiti but also to enrich their lives and communities through training and education beyond school.</p>
                    <div class="btn-container">
                        <button class="tertiary-btn">
                         VIEW PROJECTS
                    </button>
                    <button class="main-btn">
                        CONTACT ME
                    </button>
                    </div>
            </section>
            <figure>
                <div class="desktop main-shadow">
                   
                    <img src="media/images/mhi-desktop.png" alt="">
                </div>
                
                <div class="mobile">
                    <img src="media/images/phone-shadow.png" alt="">
                    <img src="media/images/mhi-mobile.png" alt="">
                </div>
            </figure>
        </div>
        <div class="shape"></div>
    </article>
    
 <?php echo ob_get_clean(); })(); ?>