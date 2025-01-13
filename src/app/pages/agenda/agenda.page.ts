import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage {
  minDate: string;
  maxDate: string;
  horas: string[] = [
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  ];
  piercings: string[] = ['NOSTRIL', 'OMBLIGO', 'INDUSTRIAL', 'SEPTUM', 'CEJA', 'HELIX', 'LABRET'];
  selectedDate: string | null = null;
  selectedTime: string | null = null;
  selectedPiercing: string | null = null;
  selectedPaymentMethod: string | null = null;

  constructor(private toastController: ToastController) {
    const now = new Date();
    this.minDate = this.formatDate(now);
    this.maxDate = this.formatDate(new Date(now.getFullYear(), now.getMonth() + 1, 0));
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  async filterWeekdays(event: any) {
    const selectedDate = new Date(event.detail.value);
    const day = selectedDate.getDay();
    if (day === 0 || day === 6) {
      event.target.value = '';
      this.selectedDate = null; // Limpia el valor seleccionado
      await this.showToast('Por favor selecciona un día de lunes a viernes.', 'warning');
    } else {
      this.selectedDate = event.detail.value;
    }
  }

  async confirmarCita() {
    const valid = this.isSelectionValid();

    if (valid) {
      await this.showToast('Cita confirmada exitosamente.', 'success');
    }
  }

  isSelectionValid(): boolean {
    if (!this.selectedDate) {
      this.showToast('Por favor selecciona un día.', 'danger');
      return false;
    }
    if (!this.selectedTime) {
      this.showToast('Por favor selecciona una hora.', 'danger');
      return false;
    }
    if (!this.selectedPiercing) {
      this.showToast('Por favor selecciona un piercing.', 'danger');
      return false;
    }
    if (!this.selectedPaymentMethod) {
      this.showToast('Por favor selecciona un método de pago.', 'danger');
      return false;
    }
    return true;
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }
}
