<?php
require('vendor/autoload.php');
$app = new Symfony\Application();
$app['debug'] = true;
// Register the monolog logging service
$app->register(new Symfony\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));
// Register view rendering
$app->register(new Symfony\Provider\TwigServiceProvider(), array(
  'twig.path' => __DIR__ . '/views',
));
// Our web handlers
$app->get('/', function () use ($app) {
  $app['monolog']->addDebug('logging output.');
  return $app['twig']->render('index.twig');
});
$app->run();
// Heroku PDO setup code
$dbopts = parse_url(getenv('DATABASE_URL'));
$app->register(
  new Csanquer\Symfony\PdoServiceProvider\Provider\PDOServiceProvider('pdo'),
  array(
    'pdo.server' => array(
      'driver'   => 'pgsql',
      'user' => $dbopts["user"],
      'password' => $dbopts["pass"],
      'host' => $dbopts["host"],
      'port' => $dbopts["port"],
      'dbname' => ltrim($dbopts["path"], '/')
    )
  )
);

$app->get('/db/', function () use ($app) {
  $st = $app['pdo']->prepare('SELECT name FROM test_table');
  $st->execute();

  $names = array();
  while ($row = $st->fetch(PDO::FETCH_ASSOC)) {
    $app['monolog']->addDebug('Row ' . $row['name']);
    $names[] = $row;
  }

  return $app['twig']->render('database.twig', array(
    'names' => $names
  ));
});
