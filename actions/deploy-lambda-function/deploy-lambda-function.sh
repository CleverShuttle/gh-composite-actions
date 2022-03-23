#!/usr/bin/env bash
set -o nounset -o errexit

PROJECT_VERSION=$1
FUNCTION_NAME=$2
JAR_FILE_WITH_PLACEHOLDER=$3
JAR_FILE="${JAR_FILE_WITH_PLACEHOLDER/PROJECT_VERSION/"$PROJECT_VERSION"}"

if [[ ! -f "$JAR_FILE" ]]; then
  echo "File not found: $JAR_FILE"
  exit 1
fi

FUNCTION_ARN=$(aws lambda get-function \
  --function-name=$FUNCTION_NAME \
  --output=json \
  | jq '.Configuration.FunctionArn' -r)

echo "Deploying '$(basename "$JAR_FILE")' as Lambda function '$FUNCTION_NAME'"

aws lambda update-function-code \
  --function-name "$FUNCTION_NAME" \
  --zip-file "fileb://$JAR_FILE"

aws lambda tag-resource \
  --resource "$FUNCTION_ARN" \
  --tags "Version=$PROJECT_VERSION"
