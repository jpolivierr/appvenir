<?php 

    require_once dirname(__DIR__)."/function.php";
    require_once dirname(__DIR__)."/system.php";
    addHeader("header", "Appvenir | Home");
    mount("Navigation","top", null);
    mount("Article","hero", null);
    mount("Article","skills", null);
    mount("Article","budget", null);
    mount("Article","idx", null);
    mount("Article","mhi", null);
    mount("Article","contact", null);
    mount("Navigation","bottom", null);
    addFooter("footer");