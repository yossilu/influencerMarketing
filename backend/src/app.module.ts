import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppRoutes } from './app.routes';
import { IGService } from './services/ig_api.service';
import { ProfilesController } from './controllers/IGProfiles.controller';
import { ContactsService } from './services/contacts_api.service';
import { ContactsController } from './controllers/contacts.controller';
import { ProxyController } from './controllers/proxy.controller';

@Module({
  imports: [
    AppRoutes,
    JwtModule
    // JwtModule.register({
    //   secret: 'your-secret-key', // Replace with your actual secret key
    //   signOptions: { expiresIn: '1h' }, // Customize the token expiration as needed
    // }),
  ],
  providers: [
    IGService,
    ContactsService
  ],
  controllers: [ProfilesController, ContactsController, ProxyController]
})
export class AppModule {}