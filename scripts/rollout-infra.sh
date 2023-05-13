kubectl apply -f infra/k8s/referit-frontend-secret.yaml -n referit
echo "Waiting for Configuration..."
sleep 5 

kubectl apply -f infra/k8s/referit-frontend-configmap.yaml -n referit
echo "Waiting for Configuration..."
sleep 5

kubectl apply -f infra/k8s/referit-frontend.yaml -n referit
kubectl rollout restart deployment.apps/referit-frontend-deployment -n referit
kubectl rollout status deployment.apps/referit-frontend-deployment -n referit
