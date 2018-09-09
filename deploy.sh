#!/usr/bin/env bash

function deploy {
  set -o allexport
  source .env
  set +o allexport

  echo $S3_APP_ONE_BUCKET

  aws s3 sync ./appOne/dist s3://$S3_APP_ONE_BUCKET
  aws s3 sync ./appTwo/dist s3://$S3_APP_TWO_BUCKET
}

function build {
  (cd appOne; npm run build)
  (cd appTwo; npm run build)
}

function help {
  echo "
    Commands:

    - build    Runs build process to build and compile both projects.
    - deploy   Deploys the dist folders to the designated s3 buckets.

  "
}

case "$1" in
  deploy)
    deploy
    ;;
  build)
    build
    ;;
  *)
    help
    ;;
esac