#!/usr/bin/env bash

function build {
  echo "Building applications..."

  (cd appOne; npm run build)
  (cd appTwo; npm run build)

  echo "Finished building applications!"
}

function deploy {
  echo "Setting environment configuration..."

  set -o allexport
  source .env
  set +o allexport

  echo "Deploying applications to s3..."

  aws s3 sync ./appOne/dist s3://$S3_APP_ONE_BUCKET
  aws s3 sync ./appTwo/dist s3://$S3_APP_TWO_BUCKET

  echo "Successfully finished deploy process!"
}

function help {
  echo "
    Commands:

    - up       Builds and deploys both applications to amazon s3.
    - build    Runs build process to build and compile both projects.
    - deploy   Deploys the dist folders to the designated s3 buckets.

  "
}

case "$1" in
  build)
    build
    ;;
  deploy)
    deploy
    ;;
  up)
    build && deploy
    ;;
  *)
    help
    ;;
esac