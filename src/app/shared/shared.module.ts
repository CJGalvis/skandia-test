import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "src/app/core/material/material.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardExplorarComponent } from './components/card-explorar/card-explorar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CardExplorarComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  exports: [MaterialModule, FlexLayoutModule, HeaderComponent, FooterComponent],
})
export class SharedModule {}
