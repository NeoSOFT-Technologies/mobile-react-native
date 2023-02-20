import { UserRepository } from './../repository/user_repository';
import { FirstRepository } from './../repository/first_repository';

export default interface DataModuleParams{
    first: FirstRepository,
    UserRepository: UserRepository
}