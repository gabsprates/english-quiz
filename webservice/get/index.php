<?php

header("Content-type: application/javascript; charset=utf-8");

$JSON = file_get_contents('../perguntas.json');
$JSON = json_decode($JSON, true);

if (
  isset($_GET['question']) &&
  isset($JSON['perguntas'][$_GET['question']])
) {

  $questao = intval($_GET['question']);
  $JSON['perguntas'][$questao]['respondida'] = 1;

  file_put_contents('../perguntas.json', json_encode($JSON, JSON_PRETTY_PRINT));
}


print_r(json_encode($JSON));
