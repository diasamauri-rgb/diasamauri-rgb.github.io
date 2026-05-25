public class SistemaIrrigacao {

    public static void main(String[] args) {

        int umidadeSolo = 25;

        System.out.println("🌱 AGRINHO 2026 - SISTEMA INTELIGENTE");

        analisarSolo(umidadeSolo);
    }

    public static void analisarSolo(int umidade) {

        if (umidade < 40) {
            System.out.println("🚨 Solo seco detectado");
            System.out.println("💧 Irrigação ATIVADA automaticamente");
        } else {
            System.out.println("💧 Solo adequado");
            System.out.println("⛔ Irrigação DESLIGADA");
        }
    }
}
