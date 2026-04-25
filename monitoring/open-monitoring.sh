#!/bin/bash

echo "🚀 Starting port-forwards for monitoring stack..."

# Kill any existing port-forwards
pkill -f "port-forward" 2>/dev/null || true
sleep 1

# Start all port-forwards in background
kubectl port-forward svc/kube-prometheus-stack-grafana \
  3001:80 -n monitoring &>/dev/null &

kubectl port-forward svc/kube-prometheus-stack-prometheus \
  9090:9090 -n monitoring &>/dev/null &

kubectl port-forward svc/kube-prometheus-stack-alertmanager \
  9093:9093 -n monitoring &>/dev/null &

sleep 2

echo ""
echo "✅ All monitoring tools are accessible:"
echo ""
echo "  📊 Grafana      → http://localhost:3001  (admin / portfolio@123)"
echo "  🔥 Prometheus   → http://localhost:9090"
echo "  🚨 Alertmanager → http://localhost:9093"
echo ""
echo "Press Ctrl+C to stop all port-forwards"

wait
