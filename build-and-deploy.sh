#!/usr/bin/env bash

BUCKET=antonioguiotto.com
SOURCE_DIR=build/


echo "Building production"
if npm run build ; then
   echo "Build Successful"
else
  echo "exiting.."
  exit 1
fi


echo "Removing all files on bucket"
aws s3 rm s3://${BUCKET} --recursive


echo "Attempting to upload site .."
echo "Command:  aws s3  sync $SOURCE_DIR s3://$BUCKET/"
aws s3 sync ${SOURCE_DIR} s3://${BUCKET}/
echo "S3 Upload complete"

echo "Invalidating cloudfrond distribution to get fresh cache"
aws cloudfront create-invalidation --distribution-id=E2EQL0AAS6JARG --paths / --profile=root

echo "Deployment complete" 