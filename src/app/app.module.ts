import { MensagemComponent } from './components/mensagem/mensagem.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { SucessoCadastroComponent } from "./sucesso-cadastro/sucesso-cadastro.component";
import { MaiorIdadeValidator } from './directives/maior-de-idade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';

// registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    MaiorIdadeValidator,
    MensagemComponent,
    ValidandoCepDirective
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}