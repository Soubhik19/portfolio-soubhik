#!/bin/bash

set -e    # stop on any error

# ── Config ───────────────────────────────────
DOCKERHUB_USERNAME="soubhik19"
REPO="portfolio-soubhik"
NAMESPACE="portfolio"
DEPLOYMENT="portfolio"

# ── Get latest SHA from Docker Hub or use 'latest' ───
TAG=${1:-latest}    # pass a tag as argument or defaults to latest
IMAGE="$DOCKERHUB_USERNAME/$REPO:$TAG"

echo "──────────────────────────────────────"
echo "🚀 Deploying $IMAGE to Minikube"
echo "──────────────────────────────────────"

# ── Step 1: Point Docker to Minikube ─────────
echo "📡 Connecting to Minikube Docker daemon..."
eval $(minikube docker-env)

# ── Step 2: Pull latest image ─────────────────
echo "📦 Pulling image: $IMAGE"
docker pull $IMAGE

# ── Step 3: Update deployment image ───────────
echo "🔄 Updating Kubernetes deployment..."
kubectl set image deployment/$DEPLOYMENT \
  $DEPLOYMENT=$IMAGE \
  -n $NAMESPACE

# ── Step 4: Wait for rollout ───────────────────
echo "⏳ Waiting for rollout to complete..."
kubectl rollout status deployment/$DEPLOYMENT -n $NAMESPACE

# ── Step 5: Verify pods ────────────────────────
echo ""
echo "✅ Deployment complete! Running pods:"
kubectl get pods -n $NAMESPACE

# ── Step 6: Show the URL ───────────────────────
echo ""
echo "🌐 Your portfolio:"
echo "Run: kubectl port-forward -n portfolio svc/portfolio-service 8080:80"
echo "Then visit: http://localhost:8080"
