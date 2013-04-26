<?php
require __DIR__ . '/../vendor/autoload.php';

use Slim\Slim,
    Slim\Extras\Views\Twig as Twig;

Slim::registerAutoloader();
$app = new Slim(array(
    'view' => new Twig,
    'templates.path' => __DIR__ . '/../templates/',
));



$app->get('/', function() use ($app) {
  $greetingsEarthlings = 'Hi, how are you?';
  $app->render(
    'index.twig',
    array(
      'greetingsEarthlings' => $greetingsEarthlings
    )
  );
});


$app->run();